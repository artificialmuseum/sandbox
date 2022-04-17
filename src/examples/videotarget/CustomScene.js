export default class CustomScene {
  constructor({ artifact, mergeConfig, preload }) {
    this.meshes = []

    this.counter = 1

    this.THREE = preload.THREE

    this.config = mergeConfig(artifact, {
      cubeSize: 0.5,
      xgrid: 20,
      ygrid: 10,
    })
  }

  beforeLoadModel({ engine }) {
    const { BoxGeometry, MeshLambertMaterial, Mesh, Object3D } = this.THREE

    const { cubeSize, xgrid, ygrid } = this.config

    const ux = 1 / xgrid
    const uy = 1 / ygrid

    const parent = new Object3D()

    const cubeGeometry = new BoxGeometry(cubeSize, cubeSize, cubeSize)

    for (let ox = 0; ox < xgrid; ox++) {
      for (let oy = 0; oy < ygrid; oy++) {
        const geometry = cubeGeometry.clone()

        this.change_uvs(geometry, ux, uy, ox, oy)

        const material = new MeshLambertMaterial({ color: 0xffffff })

        material.hue = ox / xgrid
        material.saturation = 1 - oy / ygrid

        material.color.setHSL(material.hue, material.saturation, 0.5)

        const mesh = new Mesh(geometry, material)
        mesh.name = `videotarget_i_j`

        const positionSizeModifier = cubeSize

        const x = (ox - xgrid / 2) * positionSizeModifier
        const y = (oy - ygrid / 2) * positionSizeModifier
        const z = -3 * positionSizeModifier
        mesh.position.set(x, y, z)

        mesh.dx = 0.001 * (0.5 - Math.random())
        mesh.dy = 0.001 * (0.5 - Math.random())

        this.meshes.push(mesh)
        parent.add(mesh)
      }
    }

    engine.renderer.autoClear = false
    this.model = parent
  }

  change_uvs(geometry, unitx, unity, offsetx, offsety) {
    const uvs = geometry.attributes.uv.array

    for (let i = 0; i < uvs.length; i += 2) {
      uvs[i] = (uvs[i] + offsetx) * unitx
      uvs[i + 1] = 1 - (uvs[i + 1] + offsety) * unity
    }
  }

  tick({ timestamp }) {
    const time = timestamp * 0.00005

    for (let i = 0; i < this.meshes.length; i++) {
      const { material } = this.meshes[i]

      let h = ((360 * (material.hue + time)) % 360) / 360
      material.color.setHSL(h, material.saturation, 0.5)
    }

    if (this.counter % 1000 > 200) {
      const { cubeSize } = this.config

      for (let i = 0; i < this.meshes.length; i++) {
        const mesh = this.meshes[i]

        mesh.rotation.x += 10 * mesh.dx
        mesh.rotation.y += 10 * mesh.dy

        mesh.position.x -= cubeSize * mesh.dx
        mesh.position.y += cubeSize * mesh.dy
        mesh.position.z += cubeSize * 2 * mesh.dx
      }
    }

    if (this.counter % 1000 === 0) {
      for (let i = 0; i < this.meshes.length; i++) {
        const mesh = this.meshes[i]

        mesh.dx *= -1
        mesh.dy *= -1
      }
    }

    this.counter++
  }
}
