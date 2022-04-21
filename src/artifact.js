export default {
  name: 'Artifact',
  slug: 'artifact',

  version: 1,

  /*
   * type
   *
   * which scene type to load.
   * -1 loads src/CustomScene.js
   */
  type: -1,

  /*
   * artifact.rotationSpeed gets used in CustomScene
   *
   * using the "mergeConfig" function, this value will overwrite the default value defined there
   */
  rotationSpeed: 0.1,

  /*
   * sky
   *
   * will load src/skybox.jpg as skybox image.
   * the leading slash is important
   */
  sky: '/skybox',

  /*
   * will load src/artifact.glb
   */
  file: 'artifact',
}
