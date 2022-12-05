export default {
  name: 'Documented Artifact',
  slug: 'documented',
  description: [
    'This example includes documentation for all CustomScene hooks as well as an artifact.js file with most of the settings.',
    'If you want to get an overview over the possible features, start here.',
  ],

  version: 1,

  /*
   * will load src/artifact.glb
   */
  file: 'artifact',

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
   * 18, AudioAnalyserLights: Change the lights based on the audio volume of the played audio file.
   */
  type: -1,

  /*
   * glb
   *
   * uncomment to not load a glb file for this scene.
   */
  // glb: false,

  /*
   * ply files (pointclouds)
   * uncomment to load a ply file instead of or additionally to the glb file
   */
  // ply: {
  //  file: '/examples/documented/artifact',
  // },

  /*
   * cam
   *
   * sets the initial position of the camera in the fallback scene
   * (laptops, older phones)
   */
  cam: {
    // x: 0,
    // y is up
    y: 1.5,
    z: 15,
  },

  /*
   * lookat
   *
   * sets the position the fallback scene camera looks at and rotates around
   */
  lookat: {
    // x: 0,
    // y is up
    y: 1.5,
    // z: 0,
  },

  /*
   * receiveShadow
   *
   * set to false to disable shadows on all objects in the scene
   */
  // receiveShadow: false,

  /*
   * shadow
   *
   * set to false to disable all shadows.
   */
  // shadow: false,

  /*
   * pos
   *
   * change the position of the object in the scene.
   * if possible, 3d editing software should be used to position objects.
   */
  // pos: {
  //   x: 0,
  //   y: 0,
  //   z: 0,
  // },

  /*
   * lightIntensity
   *
   * change this value to brighten or dim the lights in the imported gltf file.
   * most of the time, lights from blender are 100 times too strong.
   */
  // lightIntensity: 0.01,

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
  // clip: true,

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

  /*
   * audio
   *
   * loads /artifact.mp4 and starts playing it when the scene starts.
   * the leading slash is important, as well as the .mp3 at the end
   */
  // audio: '/artifact.mp3',

  /*
   * video
   *
   * loads /video.mp4 onto an object in the gltf file.
   * mesh object has to be named "videotarget" and should have as few vertices as possible.
   * uv mapping can be used to spread one video over multiple meshes.
   */
  // video: '/artifact.mp4',

  /*
   * chromaKey (greenscreen)
   *
   * use greenscreen on the video material of your 3d object.
   * can be set to true to use 0xd432 (greenscreen green in hex color format),
   * which is the default green.
   * can be set to any css color too (#ff0000, 'red')
   */
  // chromaKey: true, // 0xd432,

  /*
   * nosort
   *
   * Multiple overlapping transparent objects cause problems
   * when the camera rotates around them.
   * The z-index seems to "jump",
   * because three.js calculates z-depth based on position of objects.
   * nosort sometimes helps to avoid this effect.
   */
  // nosort: true,

  /*
   * clickables
   *
   * this allows usage of the onTouch function in the CustomScene.
   * The example below will find any object with a name
   * that includes the word "cube",
   * starts with "test" or is named exactly "clickable"
   */
  // clickables: ['*cube*', 'test*', 'clickable'],

  /*
   * frustumCulled
   *
   * Some objects will get frustum culled in augmented reality.
   * Try this option if parts of your object disappear when you get too close to them.
   */
  // frustumCulled: { type: 'boolean' },

  /*
   * hideLight
   *
   * Uncomment this setting to completely disable the threejs lights.
   * This can help if you want to completely control the lighting via glb.
   */
  // hideLight: true,

  /*
   * loop
   *
   * Set this setting to false to stop animations from looping.
   */
  // loop: false,

  /*
   * loopVideo
   *
   * Set this setting to false to stop videos after playing once
   */
  // loopVideo: false,

  /*
   * analyseAudio
   *
   * This setting enables audio analysis of the played audio file.
   * will call the renderAudioAnalyser function each render frame.
   */
  // analyseAudio: true,

  /*
   * audioAnalyserThreshold
   *
   *  This setting changes the Sensibility of the audioAnalyser.
   */
  //audioAnalyserThreshold: 10,

  /*
   * waves
   *
   * which bands of sound to use as a base for the volume calculations
   */
  // waves: [[0, 10], [55, 80]],
}
