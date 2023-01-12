// Cria uma cena
const scene = new THREE.Scene();

// Cria uma câmera
const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);

// Posiciona a câmera para que fique de frente para a mesa
camera.position.z = 5;

// Cria um renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Cria a geometria da mesa
const tableGeometry = new THREE.BoxGeometry(16, 9, 0.5);

// Cria o material da mesa
const tableMaterial = new THREE.MeshPhongMaterial();

// Carrega a textura da mesa
const tableTexture = new THREE.TextureLoader().load('imagens/texturamesa.jpg');
tableMaterial.map = tableTexture;
tableMaterial.needsUpdate = true;

// Cria o objeto da mesa usando a geometria e o material
const table = new THREE.Mesh(tableGeometry, tableMaterial);

// Carrega a textura da carta
const cardTexture = new THREE.TextureLoader().load('imagens/pokemon.jpeg');

// Cria uma geometria para a carta
const cardGeometry = new THREE.BoxGeometry(1.5, 1.5, 0.05);

// Cria uma material para a carta
const cardMaterial = new THREE.MeshPhongMaterial({ map: cardTexture });

// Cria 4 cartas usando a geometria e material criados
const card1 = new THREE.Mesh(cardGeometry, cardMaterial);
const card2 = new THREE.Mesh(cardGeometry, cardMaterial);
const card3 = new THREE.Mesh(cardGeometry, cardMaterial);
const card4 = new THREE.Mesh(cardGeometry, cardMaterial);

// Posiciona as cartas
card1.position.set(-2, 0, 1);
card2.position.set(2, 0, 1);
card3.position.set(0, 2, 1);
card4.position.set(0, -2, 1);

// Adiciona as cartas a cena
scene.add(card1);
scene.add(card2);
scene.add(card3);
scene.add(card4);



// Adiciona a mesa à cena
scene.add(table);

// Adiciona iluminação à cena
const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(1, 2, 1);
scene.add(light);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    card1.rotation.y += 0.01;
    card2.rotation.x += 0.02;
    card3.rotation.z += 0.02;
    card4.rotation.y += 0.02;
}

card1.dispatchEvent(addEventListener('click', () => {
}))

animate();
