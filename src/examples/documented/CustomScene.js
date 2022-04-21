export default class CustomScene {
  /*
   * CustomScene constructor
   *
   * this function gets called very early on in the loading process by the preloader.
   */
  constructor({ artifact, mergeConfig, preload, $, W, is }) {
    /*
     * mergeConfig allows us to merge the default config of this scene
     * with the custom config defined in each individual artifact.
     */
    this.config = mergeConfig(artifact, {
      customKey: 'defaultValue',
      colors: [
        0xff0000, 0x00ff00, 0x0000ff, 0x00ffff, 0xffff00, 0xff00ff, 0x550055, 0x005555, 0x555500,
      ],
    })

    /*
     * this is a reference to THREE.js, all default exports from threejs are in here.
     */
    this.THREE = preload.THREE

    /*
     * artifact is an object, imported from src/artifact.js
     */
    this.artifact = artifact
  }

  /*
   * CustomScene.preload
   *
   */

  async preload({ artifact, preload }) {
    /*
     * this function can be used to preload additional assets.
     * for example, the ply loader scene uses this function to load the ply file.
     */
  }

  /*
   * CustomScene.beforeLoadModel
   *
   * gets called directly before the Arm Engine initializes the gltf file in threejs.
   * can be used to on-the-fly change the gltf, for example cloning one mesh from the gltf file to create particles.
   */
  async beforeLoadModel({ engine, preload }) {
    this.engine = engine

    /* preload already has a reference to the loaded gltf file */
    this.gltfScene = preload.assets.gltf.scene
    this.animations = preload.assets.gltf.animations
  }

  /*
   * CustomScene.afterLoadModel
   * gets called directly after the Arm Engine has loaded the gltf file and initialized it.
   */
  async afterLoadModel({ engine }) {
    this.model = engine.model
  }

  /*
   * CustomScene.afterSpawnModel
   * gets called after the model actually got spawned into the scene.
   * In the fallback, this happens instantly, in augmented realitty however
   * this gets triggered after the visitor touched the screen to position the object
   */
  afterSpawnModel({ engine }) {}

  /*
   * CustomScene.onTouch
   * triggered when artifact.clickables is an array of names to make touchable.
   * touched is an array of touched threejs Object3Ds,
   */
  onTouch(touched) {
    touched.forEach(object => {
      const colId = Math.floor(Math.random() * this.config.colors.length)

      /*
       * individual objects have a material and a mesh, and any value of those can be changed.
       * if the object has a custom shader attached, this function could overwrite shader uniforms instead.
       */
      object.material.color.set(this.config.colors[colId])
    })
  }

  /*
   * CustomScene.tick
   * this function gets called every frame.
   * it receives the timestamp and frame, but does not render on it's own.
   */
  tick({ delta, timestamp, frame }) {
    /*
     * time difference since last frame,
     * can be used for framerate independent effects and animations.
     */
    this.delta = delta

    /*
     * timestamp of this frame based on the start of the runtime
     */
    this.timestamp = timestamp

    /*
     * frame: this is the webxr frame, useful for some advanced features.
     * since ios does not yet support webxr, this is largely unused and, unfortunately, quite useless.
     */
    this.frame = frame

    /*
     * this.model is defined above in afterLoadModel
     * in this case, we change the y axis rotation of the whole model
     */
    this.model.rotation.y += 0.1
  }

  /*
   * CustomScene.render
   * this function gets called every frame.
   * it receives the timestamp and frame.
   * this function also renders the scene.
   */
  render({ delta, timestamp, frame }) {
    const { camera, renderer, scene } = this.engine

    /*
     * this.model is defined above in afterLoadModel
     * this gets handled by the tick function above
     */
    // this.model.rotation.y += 0.1

    /*
     * will allow custom postprocessing effects in a distant future,
     * blocked by three.js implementation of postprocessing for augmented reality devices.
     */
    renderer.render(scene, camera)
  }
}
