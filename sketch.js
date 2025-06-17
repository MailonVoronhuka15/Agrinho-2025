let plantas = [];
let emojiPlanta = '🌱'; // emoji inicial
let emojiArvore = '🌳'; // emoji de árvore jovem

function setup() {
  createCanvas(400, 400);
  background(135, 206, 235); // Céu
}

function draw() {
  // Desenha o cenário
  background(135, 206, 235);
  // Sol
  fill(255, 204, 0);
  noStroke();
  ellipse(70, 70, 80, 80);
  // Terra
  fill("#74402D");
  rect(0, height * 0.65, width, height * 0.35);
  // Nuvens
  textSize(70);
  text('☁️', width / 1.3, height / 4);
  text('☁️', width / 6, height / 4);
  text('☁️', width / 3, height / 5);
  text('☁️', width / 2, height / 3.7);
  
  // Desenha as plantas ou árvores com emojis
  textAlign(CENTER, BOTTOM);
  for (let i = 0; i < plantas.length; i++) {
    let p = plantas[i];
    // Escolhe emoji baseado no estágio
    let emojiAtual = p.stage < 3 ? emojiPlanta : emojiArvore;
    // Define o tamanho do texto com base no estágio
    let size = 20 + p.stage * 10; // aumenta o tamanho conforme o estágio
    textSize(size);
    text(emojiAtual, p.x, p.y);
  }
  
  // Atualiza o crescimento das plantas
  for (let i = 0; i < plantas.length; i++) {
    let p = plantas[i];
    if (p.stage < 3) {
      p.stage += 0.01; // controla a velocidade de crescimento
    }
  }
}

// Quando clica, adiciona uma planta na posição do mouse
function mousePressed() {
  if (mouseY > height * 0.65) {
    plantas.push({x: mouseX, y: mouseY, stage: 0});
  }
}