export default class CustomScene {
  constructor() {
    this.speed = 0.01;
  }

  /*
 * this function will run after the gltf file has loaded and is initialized,
 * scene: object holding references to a lot of the scene objects, see below for details
 * THREE: all THREE default exports
 */
  async init(scene, THREE) {
    console.log('model init done', { scene, THREE })

    this.THREE = THREE
    this.scene = scene

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

  logOncePerSecond (timestamp, frame, scene) {
    const now = new Date().getTime()
    if (now > this.lastLog + 1000) {
      this.lastLog = now
      console.log({ timestamp, frame, scene })
    }
  }

  /*
  * this function will run once per three.js frame,
  * timestamp: frames since engine started
  * frame: the current frame (only in webxr)
  * three: object holding references to a lot of the scene objects, see below for details
  */
  render(timestamp, frame) {
    this.logOncePerSecond(timestamp, frame,this.scene)

    /*
    * destructure the individual keys from the scene object
    */
    const {
      model,      // the gltf file
      camera,     // the threejs camera. !can not be rotated or positioned!
      renderer,   // the threejs renderer
      scene,      // the threejs scene
      // controller, // the "user" object, has a matrixWorld, can be used for distance or orientation calculations
      // clock,      // threejs clock, only runs if animations are running
      // actions,    // array of animations
      // mixer,      // threejs animation mixer
    } = this.scene

    model.rotation.x += this.speed * 2;
    model.rotation.y += this.speed;
    model.rotation.z += this.speed * 3;

    renderer.render(scene, camera)
  }
}
