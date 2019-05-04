// document.addEventListener("DOMContentLoaded", function(){
document.addEventListener("DOMContentLoaded", function() {

  const section = document.querySelector('section')
  const chromatic = document.querySelector('.chromatic')
  const prompt = document.querySelector('#prompt')
  const innerPrompt = document.querySelector('#innerprompt')

  chromatic.addEventListener("click", function(){
    // event.preventDefault()
    if (section.style.display === "none") {
      section.style.display = "block"

      function detectSpecs() {

        var hasWebgl = (function() {
          try {
            return !!window.WebGLRenderingContext && !! document.createElement('canvas').getContext('experimental-webgl')
          } catch (e) {
            return false
          }
        })()

        var hasGetUserMedia = (function() {
          return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia)
        })()

        if (!hasGetUserMedia) {
          prompt.style.display = 'block'
          innerPrompt.innerHTML = 'This demo requires webcam support (Firefox, Chrome or Opera).'
          setTimeout(function(){
            prompt.style.display = "none"
          }, 2000)
        } else if (!hasWebgl) {
          prompt.style.display = 'block'
          innerPrompt.innerHTML = 'No WebGL support detected. Please try restarting the browser.'
          setTimeout(function(){
            prompt.style.display = "none"
          }, 2000)
        } else {
          prompt.style.display = 'block'
          innerPrompt.innerHTML = 'Please allow camera access.'
          setTimeout(function(){
            prompt.style.display = "none"
          }, 2000)
          init()
        }
      }

      const vidWidth = 256
      const vidHeight = 256

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })

      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setClearColor(0x000000, 0)

      const sectionTag = document.querySelector("section")
      sectionTag.appendChild(renderer.domElement)

      const video = document.createElement('video')
      video.width = vidWidth
      video.height = vidHeight
      video.autoplay = true
      video.loop = true

      window.URL = window.URL || window.webkitURL
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia

      navigator.getUserMedia({
        video: true,
        audio: false
      }, function(stream) {
        video.srcObject = stream
        prompt.style.display = 'none'
      }, function(error) {
        prompt.style.display = 'block'
        innerPrompt.innerHTML = 'Unable to capture webcam. Please allow webcam for a little surprise 📹.'
        setTimeout(function(){
          prompt.style.display = "none"
        }, 2000)
      })

      videoTexture = new THREE.Texture(video)
      videoTexture.minFilter = THREE.LinearFilter
      videoTexture.magFilter = THREE.LinearFilter

      const scene = new THREE.Scene()

      const ambientLight = new THREE.AmbientLight(0x777777)
      scene.add(ambientLight)

      const pointLight = new THREE.PointLight(0xFFFFFF, 1, 0)
      pointLight.position.set(500,500,-2000)
      scene.add(pointLight)

      const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 10000)
      camera.position.z = -3000

      const ball = function() {
        const geometry = new THREE.SphereGeometry(600, 128, 120)
        const material = new THREE.MeshLambertMaterial({
          map : videoTexture
        })

        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)
        return mesh
      }

      const sphere = ball()

      const edge = [window.innerWidth, window.innerHeight, 1000]
      const speed = Math.random() * 5 + 5
      const direction = [
      Math.round(Math.random()) == 1 ? 1 : -1,
      Math.round(Math.random()) == 1 ? 1 : -1,
      Math.round(Math.random()) == 1 ? 1 : -1
      ]

      const updatePosition = function() {
        sphere.position.x += direction[0] * speed
        sphere.position.y += direction[1] * speed
        sphere.position.z += direction[2] * speed
      }

      const updateDirection = function() {
        if (Math.abs(sphere.position.x) > edge[0])
          direction[0] = -direction[0]
        if (Math.abs(sphere.position.y) > edge[1])
          direction[1] = -direction[1]
        if (Math.abs(sphere.position.z) > edge[2])
          direction[2] = -direction[2]
      }

      // const updateShader = function() {
      //   const time = performance.now() * 0.001
      //   var k = 3;
      //   for (var b = 0; b < sphere.geometry.vertices.length; b++) {
      //     var p = sphere.geometry.vertices[b];
      //     p.normalize().multiplyScalar(1 + 0.3 * noise.perlin3(p.x * k + time, p.y * k, p.z * k));
      //   }
      //   sphere.geometry.computeVertexNormals();
      //   sphere.geometry.normalsNeedUpdate = true;
      //   sphere.geometry.verticesNeedUpdate = true;
      // }

      const animate = function() {
        camera.lookAt(scene.position)
        if (video.readyState === video.HAVE_ENOUGH_DATA) {
          videoTexture.needsUpdate = true
        }
        requestAnimationFrame(animate)
        // updateShader()
        updatePosition()
        updateDirection()
        sphere.rotation.x += 0.01
        sphere.rotation.y += 0.01
        renderer.render(scene, camera)
      }

      animate()

      window.addEventListener("resize", function() {
        camera.aspect = window.innerWidth/innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      })

      setTimeout(function(){
        section.style.display = "none"
        video.srcObject.getTracks().forEach(function (stream) {
          stream.stop()
        })
      }, 15000)
    }
    else {
      section.style.display = "none"
    }
  })
})
