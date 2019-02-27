// function detectSpecs() {
//   prompt = document.querySelector('#prompt')
//   var hasWebgl = (function() {
//     try {
//       return !!window.WebGLRenderingContext && !! document.createElement('canvas').getContext('experimental-webgl')
//     } catch (e) {
//       return false
//     }
//   })()

//   var hasGetUserMedia = (function() {
//     return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia)
//   })()

//   if (!hasGetUserMedia) {
//     prompt.innerHTML = 'This demo requires webcam support (Chrome or Opera).'
//   } else if (!hasWebgl) {
//     prompt.innerHTML = 'No WebGL support detected. Please try restarting the browser.'
//   } else {
//     prompt.innerHTML = 'Please allow camera access.'
//     init()
//   }
// }

// const vidWidth = 256
// const vidHeight = 256

// const renderer = new THREE.WebGLRenderer({
//   antialias: true,
//   alpha: true
// })

// renderer.setSize(window.innerWidth, window.innerHeight)
// renderer.setPixelRatio(window.devicePixelRatio)
// renderer.setClearColor(0x000000, 0)

// const sectionTag = document.querySelector("section")
// sectionTag.appendChild(renderer.domElement)

// const video = document.createElement('video')
// video.width = vidWidth
// video.height = vidHeight
// video.autoplay = true
// video.loop = true

// window.URL = window.URL || window.webkitURL
// navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia
// navigator.getUserMedia({
//   video: true
// }, function(stream) {
//   video.srcObject = stream
//   prompt.style.display = 'none'
// }, function(error) {
//   prompt.innerHTML = 'Unable to capture WebCam. Please reload the page.'
// })

// videoTexture = new THREE.Texture(video)
// videoTexture.minFilter = THREE.LinearFilter
// videoTexture.magFilter = THREE.LinearFilter


// const scene = new THREE.Scene()

// const ambientLight = new THREE.AmbientLight(0x777777)
// scene.add(ambientLight)

// const pointLight = new THREE.PointLight(0xFFFFFF, 1, 0)
// pointLight.position.set(500,500,-2000)
// scene.add(pointLight)

// const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 10000)
// camera.position.z = -3000

// const ball = function() {
//   const geometry = new THREE.SphereGeometry(600, 128, 120)
//   const material = new THREE.MeshLambertMaterial({
//     map : videoTexture
//   })

//   const mesh = new THREE.Mesh(geometry, material)
//   scene.add(mesh)
//   return mesh
// }

// const sphere = ball()

// const animate = function() {
//   camera.lookAt(scene.position)
//   if (video.readyState === video.HAVE_ENOUGH_DATA) {
//     videoTexture.needsUpdate = true
//   }  requestAnimationFrame(animate)
//   // sphere.position.x += 0.001
//   // sphere.position.y += 1
//   // sphere.position.z += 1
//   renderer.render(scene, camera)
// }

// animate()

// window.addEventListener("resize", function() {
//   camera.aspect = window.innerWidth/innerHeight
//   camera.updateProjectionMatrix()
//   renderer.setSize(window.innerWidth, window.innerHeight)
// })
