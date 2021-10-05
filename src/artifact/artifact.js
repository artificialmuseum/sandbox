export default {
  name: 'Artifact',
  slug: 'artifact',

  /*
   * will load src/skybox/skybox.jpg
   */
  sky: 'skybox',

  /*
   * will load src/artifact.glb
   */
  file: 'artifact',

  /*
   * sets the position of the camera in the fallback scene (laptops, older phones)
   */
  cam: {
    // y is up
    y: 2,
    z: 25,
  },

  /*
   * sets the position the fallback scene camera looks at
   */
  lookat: {
    // y is up
    y: 2,
  },

  /*
   * set to false to disable shadows on all objects in the scene
   */
  // receiveShadow: false,

  /*
   * set to false to disable all shadows.
   */
  // shadow: false,

  /*
   * change the position of the object in the scene.
   * if possible, 3d editing software should be used to position objects.
   */
  // pos: {
  //   x: 0,
  //   y: 0,
  //   z: 0,
  // },

  /*
   * change this value to brighten or dim the lights in the imported gltf file.
   * most of the time, lights from blender are 100 times too strong.
   */
  // lightIntensity: 0.01,

  /*
   * if the glb file includes meshes that have "clip" in their name,
   * and if clip is set to true,
   * these meshes will turn into clipping masks for all other objects in the scene.
   * masking has to be used carefully,
   * the visitors can just move into the clipping masks and cancel the effect.
   */
  // clip: true,

  /*
   * which side of the clipping mesh clips.
   * valid values: 'back', 'double'.
   * set to 'back' to use BackSide, 'double' to clip from both sides.
   * if clipSide is not set, FrontSide is used.
   */
  // clipSide: 'back',

  /*
   * loads /audio/artifact.mp4 and starts playing it when the scene starts.
   */
  // audio: true,

  /*
   * loads /video/artifact/artifact.mp4 onto an object in the gltf file.
   * object has to be named "videotarget" and should be as simple as possible.
   */
  // video: true,

  /*
   * use greenscreen on the video material
   * can be set to true to use 0xd432, which is the default green.
   */
  // chromaKey: true, // 0xd432,

  /*
   * Multiple overlapping transparent objects cause problems when the camera rotates around them.
   * The z-index seems to "jump", because three.js calculates z-depth based on position of objects.
   * nosort sometimes helps to avoid this effect.
   */
  // nosort: true,
}
