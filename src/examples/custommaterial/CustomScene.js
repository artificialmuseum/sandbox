import { vertexShader } from './shaders/vertex.shader.js'
import { fragmentShader } from './shaders/fragment.shader.js'

import * as THREE from 'https://stagingengine.artificialmuseum.com/three.js'

export default class CustomScene {
  constructor({ artifact, mergeConfig, preload }) {
    this.config = mergeConfig(artifact, {
      cubeSize: 0.5,
      xgrid: 20,
      ygrid: 10,
      materialSpeed: 1,
    })

    const res = 512
    this.materialConfig = mergeConfig(artifact, {
      resolution: { x: res, y: res },
      startTime: 0,
    })
  }

  afterLoadModel({ engine }) {
    const { model } = engine

    const { DoubleSide, ShaderMaterial } = THREE

    this.customMaterial = new ShaderMaterial({
      transparent: true,
      side: DoubleSide,

      uniforms: {
        uTime: { value: this.materialConfig.startTime, type: 'f' },
        uRes: { value: this.materialConfig.resolution, type: 'f2' },
      },

      fragmentShader,
      vertexShader,
    })

    const materialTarget = model.getObjectByName('materialtarget')
    materialTarget.material = this.customMaterial
  }

  tick({ delta }) {
    this.customMaterial.uniforms.uTime += delta * this.config.materialSpeed
  }
}
