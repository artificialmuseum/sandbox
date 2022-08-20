export default {
  name: 'Portal',
  slug: 'portal',

  description: [
    'A portal that you can enter through to experience another world.',
    'Caveats:',
    'Only rectangular doors, positioned exactly around 0,0,0.',
    'Only rectangular rooms.',
  ],

  version: 1,

  /*
   * will load src/artifact.glb
   */
  file: 'examples/portal/artifact',

  /*
   * type
   *
   * which scene type to load
   * 1 is the default scene without special features.
   */
  type: -1,

  clip: true,

  lookat: {
    z: -2,
  },

  cam: {
    maxPolar: 70,
  },

  /*
   * sky
   *
   * will load src/skybox.jpg as skybox image.
   * the leading slash is important
   */
  sky: '/skybox',
}
