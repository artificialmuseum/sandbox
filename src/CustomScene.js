export default class CustomScene {
  constructor({ artifact, preload, $, W }) {
    this.THREE = preload.THREE
    this.artifact = artifact
  }

  init({ engine }) {
    this.engine = engine
  }

  render() {
    const { camera, renderer, scene } = this.engine

    this.engine.model.rotation.y += 0.1

    renderer.render(scene, camera)
  }
}
