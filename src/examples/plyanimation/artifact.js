export default {
  name: 'Ply Animation',
  slug: 'plyanimation',
  description: [
    'This example loads 3 ply files and then translates between them.',
  ],

  version: 1,

  /*
   * will load src/examples/ply/artifact.ply
   */
  // file: '/examples/ply/artifact',

  ply: {
    files: [
      // '/examples/plyanimation/lens01',
      // '/examples/plyanimation/lens02',
      '/examples/plyanimation/a',
      '/examples/plyanimation/b',
      '/examples/plyanimation/c',
    ],
    speed: 0.3,
    animated: true,
    delay: 1000,
  },

  /*
   * type
   *
   * which scene type to load
   * -1, CustomScene: Load local CustomScene.js file
   */
  // type: -1,

  vertexColors: true,

  /*
   * glb
   *
   * uncomment to not load a glb file for this scene,
   * since we are loading a ply file instead.
   */
  glb: false,

  /*
   * sky
   *
   * will load src/skybox.jpg as skybox image.
   * the leading slash is important
   */
  sky: '/skybox',
}
