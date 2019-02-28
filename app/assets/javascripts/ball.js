document.addEventListener("DOMContentLoaded", function(){

  const section = document.querySelector('section')
  const chromatic = document.querySelector('.chromatic')

  chromatic.addEventListener("click", function(){
    if (section.style.display === "none") {
      section.style.display = "block"

      function detectSpecs() {
        const prompt = document.querySelector('#prompt')
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
          prompt.innerHTML = 'This demo requires webcam support (Firefox, Chrome or Opera).'
        } else if (!hasWebgl) {
          prompt.innerHTML = 'No WebGL support detected. Please try restarting the browser.'
        } else {
          prompt.innerHTML = 'Please allow camera access.'
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
        prompt.innerHTML = 'Unable to capture WebCam. Please reload the page.'
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
      sphere.position.y = 650

      // const update = function() {
      //   const time = performance.now() * 0.001;
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
        // update()
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
        // sphere.position.x += 0.001
        // sphere.position.y += 1
        // sphere.position.z += 1
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
