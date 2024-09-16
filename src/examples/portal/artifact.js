export default {
  name: 'Portal',
  slug: 'portal',
  version: 1,

  description: ['A portal that you can enter through to experience another world.'],

  /*
   * type
   *
   * which scene type to load.
   * 20 loads the portal scene.
   */
  type: 20,

  clip: true,

  // renderTargets: [
  //   { cam: 'renderTargetCam', target: 'target', off: ['inside', 'insideSphere', 'clipSphere'] },
  // ],

  lookat: {
    z: -3,
  },

  noShadowCastObjects: [
    'insideSphere',
    // 'door',
    'target',
    'clipSphere',
  ],

  /*
   * sky
   *
   * will load /skybox.jpg as skybox image.
   * the leading slash is important
   */
  sky: '/skybox',

  /*
   * will load examples/portal/artifact.glb
   */
  file: '/examples/portal/artifact.glb',
}
