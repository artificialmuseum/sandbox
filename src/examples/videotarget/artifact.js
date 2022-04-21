export default {
  name: 'Clipping',
  slug: 'Clipping',

  version: 1,

  /*
   * will load src/examples/videotarget/videotarget
   */
  // file: 'examples/videotarget/videotarget',

  /*
   * type -1: loads ./CustomScene.js
   */
  type: -1,

  /*
   * glb
   *
   * is set to false because we create the model in the CustomScene
   */
  glb: false,

  /*
   * video
   *
   * loads /videoname.mp4 onto an object in the gltf file.
   * mesh object has to be named "videotarget" and should have as few vertices as possible.
   * uv mapping can be used to spread one video over multiple meshes.
   */
  video: '/examples/videotarget/sintel.mp4',

  /*
   * sky
   *
   * will load src/skybox.jpg as skybox image.
   * the leading slash is important
   */
  sky: '/skybox',
}
