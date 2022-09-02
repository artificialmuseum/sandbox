export default {
  name: 'Custom Material',
  slug: 'custommaterial',
  description: [
    'This example shows how to use a custom fragment and vertex shader on a 3d Object imported via gltf',
  ],

  version: 1,

  /*
   * type -1: loads ./CustomScene.js
   */
  type: -1,


  /*
   * will load ./artifact.glb
   */
  file: 'examples/custommaterial/artifact',

  /*
   * sky
   *
   * will load src/skybox.jpg as skybox image.
   * the leading slash is important
   */
  sky: '/skybox',
}
