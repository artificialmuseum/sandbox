export default {
  name: 'Clickable Cubes',
  slug: 'clickables',
  description: ['This example showcases clickable cubes that change their color on touch'],

  version: 1,

  /*
   * will load src/artifact.glb
   */
  file: 'examples/clickables/clickables',

  /*
   * type
   *
   * which scene type to load
   * -1 is the src/CustomScene.js file.
   */
  type: -1,

  clickables: ['*cube*'],

  /*
   * sky
   *
   * will load src/skybox.jpg as skybox image.
   * the leading slash is important
   */
  sky: '/skybox',
}
