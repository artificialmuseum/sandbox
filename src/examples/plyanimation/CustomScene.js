export default class CustomScene {
  /*
   * CustomScene constructor
   *
   * this function gets called very early on in the loading process by the preloader.
   */
  constructor({ artifact, mergeConfig, preload, W }) {
    /*
     * this is a reference to THREE.js, all default exports from threejs are in here.
     */
    this.THREE = preload.THREE
    this.W = W
    this.preloader = preload

    /*
     * artifact is an object, imported from src/artifact.js
     */
    this.artifact = artifact

    this.config = mergeConfig(artifact.plyanim, {
      files: [],
      computeVertexNormals: false,
      vertexColors: true,
      color: 0xffffff,
      size: 0.03,
      sizeAttenuation: 0.0001,
      delay: 1000,
    })

    this.currentDirection = 1
    this.nextStep = 0
    this.targetIndex = 0
  }

  createGeometry(geometries) {
    const [geometry, ...geos] = geometries

    // create an empty array to hold targets for the attribute we want to morph
    // morphing positions and normals is supported
    geometry.morphAttributes = {
      position: [],
      color: [],
    }

    geos.forEach(geo => {
      geometry.morphAttributes.position.push(geo.attributes.position)
      geometry.morphAttributes.color.push(geo.attributes.color)

    })

    return geometry;
  }

  /*
   * CustomScene.preload
   *
   */
  async preload({ preload }) {
    const { THREE, plyLoader: loader, promisifiedLoad } = preload

    const { files } = this.config

    const geometries = await Promise.all(files.map(async file => {
      if (!file.startsWith('/')) {
        file = `${this.W.STATIC_URL}/ply-animation/${file}.ply`
      }
      if (!file.endsWith('.ply')) {
        file = file + '.ply'
      }

      return await promisifiedLoad({ loader, file })
    }))

    const geometry = this.createGeometry(geometries);

    const {
      size,
      sizeAttenuation,
      vertexColors,
    } = this.config

    const material = new THREE.PointsMaterial({
      size,
      sizeAttenuation,
      vertexColors,
    })

    this.model = new THREE.Points(geometry, material)
    // console.log(this.model)
  }
  //   /*
  //    * this function can be used to preload additional assets.
  //    * for example, the ply loader scene uses this function to load the ply file.
  //    */

  //   let { files = [] } = this.config

  //   if (!files.length) {
  //     throw new Error('No ply files specified.')
  //   }

  //   const paths = files.map(file => {
  //     if (!file.startsWith('/')) {
  //       file = `${this.W.STATIC_URL}/ply-animation/${file}.ply`
  //     }
  //     if (!file.endsWith('.ply')) {
  //       file = file + '.ply'
  //     }

  //     return file
  //   })

  //   const loader = preload.plyLoader

  //   const geometries = await Promise.all(paths.map(async file => {
  //     // console.log({ file })
  //     return await preload.promisifiedLoad({ loader, file })
  //   }))

  //   if (this.config.computeVertexNormals) {
  //     geometries.forEach(geo => geo.computeVertexNormals())
  //   }

  //   const { size, vertexColors } = this.config

  //   const uniforms = {
  //     time: { type: 'f', value: 0 },
  //     size: { type: 'f', value: size },
  //   }

  //   const material = new THREE.ShaderMaterial({
  //     vertexColors,
  //     vertexShader,
  //     fragmentShader,
  //     uniforms,
  //     morphTargets: true,
  //     morphNormals: true,
  //   })

  //   const [startGeo, targetGeo] = geometries

  //   const { count } = startGeo.attributes.position

  //   // var attrPhi = new Float32Array(count);
  //   // var attrTheta = new Float32Array(count);
  //   // var attrSpeed = new Float32Array(count);
  //   // var attrAmplitude = new Float32Array(count);
  //   // var attrFrequency = new Float32Array(count);

  //   const goal = new Float32Array(count);

  //   for (var i = 0; i < count; i++) {
  //     goal[i + 0] = targetGeo.attributes.position.array[i + 0] || 0
  //     goal[i + 1] = targetGeo.attributes.position.array[i + 1] || 0
  //     goal[i + 2] = targetGeo.attributes.position.array[i + 2] || 0

  //     // attrPhi[i] = Math.random() * Math.PI * 2;
  //     // attrTheta[i] = Math.random() * Math.PI * 2;
  //     // attrSpeed[i] = THREE.MathUtils.randFloatSpread(6);
  //     // attrAmplitude[i] = Math.random() * 5;
  //     // attrFrequency[i] = Math.random() * 5;
  //   }

  //   // startGeo.setAttribute('phi', new THREE.BufferAttribute(attrPhi, 1));
  //   // startGeo.setAttribute('theta', new THREE.BufferAttribute(attrTheta, 1));
  //   // startGeo.setAttribute('speed', new THREE.BufferAttribute(attrSpeed, 1));
  //   // startGeo.setAttribute('amplitude', new THREE.BufferAttribute(attrAmplitude, 1));
  //   // startGeo.setAttribute('frequency', new THREE.BufferAttribute(attrFrequency, 1));

  //   startGeo.morphAttributes.position = [new THREE.BufferAttribute(goal, 3)]
  //   startGeo.updateMorphTargets()

  //   const points = new THREE.Points(startGeo, material)

  //   points.morphTargetInfluences = [0.01]

  //   /*
  //    * by setting this.model here,
  //    * in combination with glb: false in the artifact.js,
  //    * we force the ArmEngine, not to load a glb file.
  //    */
  //   this.model = points
  // }

  tick({ delta, timestamp }) {
    if (!this.model) {
      return
    }

    if (this.nextStep < timestamp) {
      this.model.morphTargetInfluences.forEach((influence, i) => {
        if (this.targetIndex === i) {
          influence += delta * this.currentDirection
        } else if (influence > 0.01) {
          influence -= delta
        }
      })
    }

    if (this.targetIndex > -1) {
      if (this.model.morphTargetInfluences[this.targetIndex] >= 0.99 && this.currentDirection === 1) {
        this.nextStep = timestamp + this.config.delay
        this.model.morphTargetInfluences[this.targetIndex] = 0.999
        this.currentDirection = -1

        this.targetIndex += 1

        if (this.targetIndex >= this.model.morphTargetInfluences.length) {
          this.targetIndex = -1
        }
      } else if (this.model.morphTargetInfluences[this.targetIndex] <= 0.01 && this.currentDirection === -1) {
        this.nextStep = timestamp + this.config.delay
        this.model.morphTargetInfluences[this.targetIndex] = 0.01
        this.currentDirection = 1
      }
    } else {
      let isFinishedFading = true

      this.model.morphTargetInfluences.forEach(inf => {
        if (inf > 0.01) {
          isFinishedFading = false
        }
      })

      if (isFinishedFading) {
        this.targetIndex = 0
      }
    }
  }
}
