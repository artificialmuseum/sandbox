export default class CustomScene {
  /*
   * CustomScene constructor
   *
   * this function gets called very early on in the loading process by the preloader.
   */
  constructor({ artifact, mergeConfig, preload, W }) {
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

    const material = new THREE.ShaderMaterial({
      color,
      size,
      vertexColors,
    })

    const points = new THREE.Points(geo, material)

    /*
     * by setting this.model here,
     * in combination with glb: false in the artifact.js,
     * we force the ArmEngine, not to load a glb file.
     */
    this.model = points
  }
}
