export default class CustomScene {
  /*
   * CustomScene constructor
   *
   * this function gets called very early on in the loading process by the preloader.
   */
  constructor({ artifact, mergeConfig, preload, $, W, is }) {
    /*
     * this is a reference to THREE.js, all default exports from threejs are in here.
     */
    this.THREE = preload.THREE

    /*
     * artifact is an object, imported from src/artifact.js
     */
    this.artifact = artifact

    this.config = mergeConfig(artifact, {
      file: artifact.slug,
      pointSize: 1.0,
      computeVertexNormals: false,
      vertexColors: true,
      color: 0xffffff,
      size: 0.03,
      ...artifact.ply,
    })

    this.W = W
  }

  /*
   * CustomScene.preload
   *
   */
  async preload({ preload }) {
    const { THREE } = preload

    /*
     * this function can be used to preload additional assets.
     * for example, the ply loader scene uses this function to load the ply file.
     */

    let { file } = this.config
    if (!file.startsWith('/')) {
      file = `${this.W.STATIC_URL}/ply/${file}.ply`
    }
    if (!file.endsWith('.ply')) {
      file = file + '.ply'
    }

    const loader = preload.plyLoader

    const geo = await preload.promisifiedLoad({ loader, file })

    if (this.config.computeVertexNormals) {
      geo.computeVertexNormals()
    }

    const { color, size, vertexColors } = this.config

    const material = new THREE.PointsMaterial({
      color,
      size,
      vertexColors,
    })

    const points = new THREE.Points(geo, material)

    this.model = points
  }

  /*
   * CustomScene.beforeLoadModel
   *
   * gets called directly before the Arm Engine initializes the gltf file in threejs.
   * can be used to on-the-fly change the gltf, for example cloning one mesh from the gltf file to create particles.
   */
  async beforeLoadModel({ engine }) {
    this.engine = engine
  }

  /*
   * CustomScene.tick
   * this function gets called every frame.
   * it receives the timestamp and frame, but does not render on it's own.
   */
  tick({ delta, timestamp, frame }) {
  }
}
