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
   * clip
   *
   * if the glb file includes meshes that have "clip" in their name,
   * for example object_1_clip, object_clip_2 etc.
   * these meshes will turn into clipping masks for all other objects in the scene.
   * masking has to be used carefully,
   * the visitors can just move into the clipping masks and cancel the effect.
   * best practice is to use clipping below the floor only.
   */
  clip: true,

  /*
   * clipSide
   *
   * which side of the clipping mesh clips.
   * valid values: 'back', 'double'.
   * set to 'back' to use BackSide, 'double' to clip from both sides.
   * if clipSide is not set, FrontSide is used.
   */
  // clipSide: 'back',

  /*
   * sky
   *
   * will load src/skybox.jpg as skybox image.
   * the leading slash is important
   */
  sky: '/skybox',
}
