export default class CustomScene {
  constructor({ artifact, mergeConfig, preload }) {
    this.config = mergeConfig(artifact, {
      portal: {
        in: 'in',
        out: 'out',
      },
    })
  }

  afterLoadModel({ engine }) {
    this.camera = engine.camera

    const { model } = engine
    this.inside = model.getObjectByName(this.config.portal.in)
  }

  tick() {
    const { x, z } = this.camera.position

    const isInDoor = x < 0.4 && x > -0.4 && z < 0.1 && z > -0.1
    const isInCube = z < 0.1 && x < 2 && x > -2

    if (isInCube) {
      if (isInDoor) {
        this.walkedThroughDoor = true
      } else if (!this.walkedThroughDoor) {
        if (this.inside.visible) {
          this.inside.visible = false
        }

        this.walkedThroughDoor = false
      }
    } else {
      this.walkedThroughDoor = false

      if (!this.inside.visible) {
        this.inside.visible = true
      }
    }
  }
}
