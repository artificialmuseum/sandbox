export default {
  name: 'Look at camera',
  slug: 'lookatcamera',
  description: ['Objects and bones can be made to look at the camera.'],

  version: 1,

  /*
   * will load src/artifact.glb
   */
  file: 'examples/lookatcamera/artifact',

  /*
   * type
   *
   * which scene type to load
   * 1 is the default scene without special features.
   */
  type: 1,

  lookAtCameraObjects: ['LookAtCamBone*', 'LookAtCamObject*'],

  animations: {
    autoplay: false,
    clampWhenFinished: false,
  },

  lookat: {
    y: 1.5,
  },

  /*
   * sky
   *
   * will load src/skybox.jpg as skybox image.
   * the leading slash is important
   */
  sky: '/skybox',

  video: '/artifact.mp4',
}
