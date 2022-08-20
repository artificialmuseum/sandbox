export default class CustomScene {
  constructor({ artifact, mergeConfig, preload }) {
    this.config = mergeConfig(artifact.portal, {
      in: 'inside',
      out: 'clipCube',
      door: 'door',
      parent: 'parent',
      doorPosition: { x: 0, y: 0, z: 0 },
      doorWidth: 1.4,
      doorHeight: 2,
      cubeSize: 4.05,
      doorZOffset: 0.05,
    })

    this.doorXOffset = this.config.doorWidth / 2
    this.cubeOffset = this.config.cubeSize / 2
    this.doorZOffset = 0.1
    this.rotation = 1

    this.walkedThroughDoor = false

    const { MathUtils, Vector3 } = preload.THREE

    this.MathUtils = MathUtils

    this.rotationNormal = new Vector3(0, 1, 0)
  }

  afterLoadModel({ engine }) {
    this.camera = engine.camera

    const { model } = engine
    this.inside = model.getObjectByName(this.config.in)
    this.clipCube = model.getObjectByName(this.config.out)
    this.door = model.getObjectByName(this.config.door)
    this.parent = model.getObjectByName(this.config.parent)
  }

  tick() {
    const { x, y, z } = this.camera.position

    const { cubeSize, doorHeight } = this.config

    const { clipCube, door, inside, parent, doorXOffset, cubeOffset, doorZOffset } = this

    const isInDoorY = y < doorHeight && y > 0
    const isInDoorX = x < doorXOffset && x > -doorXOffset
    const isOutsideDoor = z > 0 && z < doorZOffset && isInDoorX && isInDoorY
    const isInsideDoor = z < 0 && z > -doorZOffset && isInDoorX && isInDoorY

    const isInCube = z < 0 && z > -cubeSize && x < cubeOffset && x > -cubeOffset

    if (isOutsideDoor) {
      this.walkingIn = true
    } else if (!isInCube) {
      this.walkingIn = false
    }

    if (isInsideDoor) {
      this.walkingOut = true
    } else if (isInCube) {
      this.walkingOut = false
    }

    if (z < 0 && !this.walkingIn) {
      parent.quaternion.setFromAxisAngle(this.rotationNormal, this.MathUtils.degToRad(180))
    } else if (z > 0 && !this.walkingOut) {
      parent.quaternion.setFromAxisAngle(this.rotationNormal, this.MathUtils.degToRad(0))
    }

    if (isInCube) {
      if (this.walkingIn) {
        this.hasJustEntered = true
        this.hasJustExited = false
        this.walkingIn = false
      }

      if (this.hasJustEntered) {
        if (clipCube.visible) {
          clipCube.visible = false
        }
        if (door.visible) {
          door.visible = false
        }
      } else {
        if (inside.visible) {
          inside.visible = false
        }
      }

      if (isInsideDoor) {
        this.walkingOut = true
      } else {
        this.walkingOut = false
      }
    } else {
      if (this.walkingOut) {
        this.hasJustEntered = false
        this.hasJustExited = true
        this.walkingOut = false
      }

      if (this.hasJustExited) {
        if (!inside.visible) {
          inside.visible = true
        }
        if (!clipCube.visible) {
          clipCube.visible = true
        }
        if (!door.visible) {
          door.visible = true
        }
      }
    }
  }
}
