import * as THREE from 'https://stagingengine.artifacialmuseum.com/three.js'

export default class CustomScene {
  constructor({ artifact, mergeConfig, preload }) {
    this.config = mergeConfig(artifact, {
      clickables: false,
      colors: [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0x00ffff, 0xff00ff],
      clickablesArePointable: false,
    })

    this.config.colors = this.config.colors.map(col => new THREE.Color(col))
  }

  onPoint(intersects, clicked) {
    if (clickablesArePointable) {
      console.log('onPoint', { intersects, clicked })
      this.onInteraction(intersects)
    }
  }

  onTouch(intersects, clicked) {
    console.log('onClicked', { intersects, clicked })
    this.onInteraction(intersects)
  }

  onInteraction(intersects) {
    intersects.forEach(touched => {
      const colorId = Math.floor(Math.random() * this.config.colors.length)

      const color = this.config.colors[colorId]
      touched.node.material.color = color
    })
  }
}
