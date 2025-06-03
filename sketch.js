let plantas = []; 

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
  
  // Desenha as plantas
  fill('green');
  for (let i = 0; i < plantas.length; i++) {
    let p = plantas[i];
    rect(p.x, p.y, 10, 20); // plantar
  }
}

// Quando clica adiciona uma planta na posição do mouse
function mousePressed() {
  // Verifica se o clique foi na terra (abaixo da linha da terra)
  if (mouseY > height * 0.65) {
    plantas.push({x: mouseX, y: mouseY - 20}); // ajusta y para ficar na terra
  }
}
  

  
  


   
   
   

  
  
  
  
  
  
  
