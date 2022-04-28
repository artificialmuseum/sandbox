export default {
  name: 'Portal',
  slug: 'portal',

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

  portal: {
    out: 'clip',
    in: 'inside',
    minDistance: 2.1,
    entrance: { x: 0.4, y: 2.0, z: 0.0 },
  },

  clip: true,

  lookat: {
    z: -2,
  },

  /*
   * sky
   *
   * will load src/skybox.jpg as skybox image.
   * the leading slash is important
   */
  sky: '/skybox',
}
