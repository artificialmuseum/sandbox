export default class CustomScene {
  /*
   * CustomScene constructor
   *
   * this function gets called very early on in the loading process by the preloader.
   */
  constructor({ artifact, mergeConfig }) {
    /*
     * mergeConfig allows us to merge the default config of this scene
     * with the custom config defined in each individual artifact.
     */
    this.config = mergeConfig(artifact, {
      rotationSpeed: 1,
    })
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
   */
  tick() {
    /*
     * this.engine is defined above in beforeLoadModel
     * in this case, we change the y axis rotation of the whole model
     */
    this.engine.model.rotation.y += this.config.rotationSpeed
  }
}
