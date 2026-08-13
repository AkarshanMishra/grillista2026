/* 
  GRILLISTA - 3D Interactive Animated Logo Emblem Engine
  Built with Three.js featuring the official Grillista circular logo,
  3D golden metallic rim medallion, levitation floating animation, and fire particle sparks.
*/

(function () {
  const container = document.querySelector('.hero-canvas-container');
  const canvas = document.getElementById('hero-3d-canvas');
  if (!canvas || !window.THREE) return;

  // 1. Scene, Camera, Renderer Setup
  const scene = new THREE.Scene();
  
  const camera = new THREE.PerspectiveCamera(
    42,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.set(0, 0, 7.0);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
  });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;

  // 2. Lighting Setup (Bright High Contrast Illumination)
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
  scene.add(ambientLight);

  const flamePointLight = new THREE.PointLight(0xe53935, 4.0, 20);
  flamePointLight.position.set(-2, -1, 3.5);
  scene.add(flamePointLight);

  const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
  keyLight.position.set(5, 6, 5);
  scene.add(keyLight);

  const backLight = new THREE.DirectionalLight(0x1b4d3e, 1.5);
  backLight.position.set(-5, -5, -3);
  scene.add(backLight);

  // 3. Fallback Procedural Logo Canvas Texture (Guarantees Instant Rendering)
  function createFallbackLogoCanvas() {
    const c = document.createElement('canvas');
    c.width = 512; c.height = 512;
    const ctx = c.getContext('2d');

    // Circular background
    ctx.fillStyle = '#FAF7F2';
    ctx.fillRect(0, 0, 512, 512);

    // Green & Red Rings
    ctx.strokeStyle = '#1B4D3E';
    ctx.lineWidth = 16;
    ctx.beginPath();
    ctx.arc(256, 256, 230, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = '#E53935';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(256, 256, 215, 0, Math.PI * 2);
    ctx.stroke();

    // Brand Title
    ctx.fillStyle = '#1B4D3E';
    ctx.font = 'bold 64px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('GRILLISTA', 256, 270);

    ctx.fillStyle = '#E53935';
    ctx.font = 'bold 24px sans-serif';
    ctx.fillText('VEG VIBES', 256, 320);

    return new THREE.CanvasTexture(c);
  }

  const fallbackTexture = createFallbackLogoCanvas();

  // 4. Construct 3D Medallion Mesh
  const logoGroup = new THREE.Group();

  const medallionRadius = 2.0;
  const medallionThickness = 0.25;

  // Front & Back Material
  const faceMat = new THREE.MeshStandardMaterial({
    map: fallbackTexture,
    roughness: 0.15,
    metalness: 0.05,
    side: THREE.DoubleSide
  });

  // Metallic Gold Outer Rim Material
  const goldEdgeMat = new THREE.MeshStandardMaterial({
    color: 0xd97706,
    roughness: 0.2,
    metalness: 0.85
  });

  // Medallion Geometry (Front Face Circle)
  const frontFaceGeo = new THREE.CircleGeometry(medallionRadius, 64);
  const frontFace = new THREE.Mesh(frontFaceGeo, faceMat);
  frontFace.position.z = medallionThickness / 2 + 0.01;
  logoGroup.add(frontFace);

  const backFace = new THREE.Mesh(frontFaceGeo, faceMat);
  backFace.position.z = -(medallionThickness / 2 + 0.01);
  backFace.rotation.y = Math.PI;
  logoGroup.add(backFace);

  // Outer Metallic Gold Torus Ring
  const ringGeo = new THREE.TorusGeometry(medallionRadius + 0.04, 0.12, 16, 64);
  const ringMesh = new THREE.Mesh(ringGeo, goldEdgeMat);
  logoGroup.add(ringMesh);

  // Inner Green Ring
  const innerRingGeo = new THREE.TorusGeometry(medallionRadius - 0.05, 0.05, 16, 64);
  const greenMat = new THREE.MeshStandardMaterial({
    color: 0x1b4d3e,
    roughness: 0.3,
    metalness: 0.5
  });
  const innerRingMesh = new THREE.Mesh(innerRingGeo, greenMat);
  innerRingMesh.position.z = 0.02;
  logoGroup.add(innerRingMesh);

  scene.add(logoGroup);

  // Load Real Image Logo Texture & Update Face Material
  const textureLoader = new THREE.TextureLoader();
  textureLoader.load(
    'assets/images/logo.jpg',
    function (loadedTexture) {
      loadedTexture.colorSpace = THREE.SRGBColorSpace;
      faceMat.map = loadedTexture;
      faceMat.needsUpdate = true;
    },
    undefined,
    function (err) {
      console.warn('Texture load fallback active:', err);
    }
  );

  // 5. Dynamic Fire Embers & Spark Particle System
  const particleCount = 200;
  const particlesGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const velocities = [];

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 5.5;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 4 - 1;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 5.5;

    velocities.push({
      x: (Math.random() - 0.5) * 0.018,
      y: Math.random() * 0.035 + 0.012,
      z: (Math.random() - 0.5) * 0.018
    });
  }

  particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const particleMat = new THREE.PointsMaterial({
    color: 0xe53935,
    size: 0.09,
    transparent: true,
    opacity: 0.85,
    blending: THREE.NormalBlending
  });

  const particleSystem = new THREE.Points(particlesGeo, particleMat);
  scene.add(particleSystem);

  // 6. Mouse Drag & Hover Controls
  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };

  window.addEventListener('mousedown', (e) => {
    isDragging = true;
    previousMousePosition = { x: e.clientX, y: e.clientY };
  });

  window.addEventListener('mouseup', () => { isDragging = false; });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) {
      const mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5;
      const mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5;
      logoGroup.rotation.y = mouseX;
      logoGroup.rotation.x = mouseY * 0.5;
      return;
    }

    const deltaMove = {
      x: e.clientX - previousMousePosition.x,
      y: e.clientY - previousMousePosition.y
    };

    logoGroup.rotation.y += deltaMove.x * 0.008;
    logoGroup.rotation.x += deltaMove.y * 0.008;

    previousMousePosition = { x: e.clientX, y: e.clientY };
  });

  // Touch controls for mobile
  window.addEventListener('touchmove', (e) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      const deltaX = touch.clientX - previousMousePosition.x;
      logoGroup.rotation.y += deltaX * 0.005;
      previousMousePosition = { x: touch.clientX, y: touch.clientY };
    }
  });

  // 7. 3D Levitation & Continuous Rotation Animation Loop
  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    // Floating levitation oscillation
    logoGroup.position.y = Math.sin(t * 1.5) * 0.18;

    // Smooth automatic 3D Y-axis rotation when idle
    if (!isDragging) {
      logoGroup.rotation.y += 0.008;
    }

    // Dynamic flame light intensity pulse
    flamePointLight.intensity = 4.0 + Math.sin(t * 8) * 0.8;

    // Update Fire Ember Particle Physics
    const pos = particlesGeo.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3 + 1] += velocities[i].y;
      pos[i * 3] += velocities[i].x;

      if (pos[i * 3 + 1] > 3.5) {
        pos[i * 3 + 1] = -2;
        pos[i * 3] = (Math.random() - 0.5) * 5;
      }
    }
    particlesGeo.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
  }

  animate();

  // 8. Responsive Window Resize Handler
  window.addEventListener('resize', () => {
    if (!container) return;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
})();
