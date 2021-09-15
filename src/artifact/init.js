/*
 * this function will run after the gltf file has loaded and is initialized,
 * three: object holding references to a lot of the scene objects, see below for details
 */

export default (scene, THREE) => {
  console.log('model init done', { scene, THREE })

  /*
   * destructure the individual keys from the threejs object
   */
  const {
    model,      // the gltf file
    // camera,     // the threejs camera. !can not be rotated or positioned!
    // renderer,   // the threejs renderer
    // controller, // the "user" object, has a matrixWorld, can be used for distance or orientation calculations
    // clock,      // threejs clock, only runs if animations are running
    // actions,    // array of animations
    // mixer,      // threejs animation mixer
  } = scene

  model.traverse(node => {
    if (node.name === 'Cube') {
      node.material.color = new THREE.Color(0xffff00)
    }
  })
}
