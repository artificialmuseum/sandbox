export default class CustomScene {
  constructor({ artifact, mergeConfig, preload }) {
    this.config = mergeConfig(artifact, {
      clickables: false,
      colors: [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0x00ffff, 0xff00ff],
    })

    this.config.colors = this.config.colors.map(col => new preload.THREE.Color(col))
  }

  onTouch(intersects) {
    intersects.forEach(touched => {
      const colorId = Math.floor(Math.random() * this.config.colors.length)

      const color = this.config.colors[colorId]
      touched.material.color = color
    })
  }
}
