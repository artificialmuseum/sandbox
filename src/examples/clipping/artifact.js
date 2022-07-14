export default {
  name: 'Clipping',
  slug: 'clipping',
  description: 'Simple example demonstrating the clip setting of the artifact.js file.',

  version: 1,

  /*
   * will load src/artifact.glb
   */
  file: 'examples/clipping/clipping',

  /*
   * type
   *
   * which scene type to load
   * -1 is the src/CustomScene.js file.
   *
   * there are multiple other scenes you can try out:
   *
   *  1, Hit: Default Scene, no special features
   *  2, Float: Everytime the user clicks the screen, spawn one object.
   *  3, Kinect: Play a kinect video using the kinect depth data as 3d displacement map
   *  4, Displacement: Plays a video on a plane, using the color of the video as a depth map.
   *  9, Latk Scene: Play any latk animation
   * 11, Ply Scene: Load any ply file
   * 18, AudioAnalyserLights: Change the lights based on the audio volume of the played audio file.
   */
  type: 1,

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

  video: '/examples/clipping/artifact.mp4',

  chromaKey: 0xff0000,
}
