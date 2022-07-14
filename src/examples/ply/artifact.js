export default {
  name: 'Ply',
  slug: 'ply',
  description: [
    'This example loads a ply file and uses the vertex colors of the object as material.',
  ],

  version: 1,

  /*
   * will load src/examples/ply/artifact.ply
   */
  file: '/examples/ply/artifact',

  /*
   * type
   *
   * which scene type to load
   * 11, Ply Scene: Load any ply file
   */
  type: -1,

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
