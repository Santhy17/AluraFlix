let filmes = [
  { nome: "Matrix", genero: "Ação" },
  { nome: "O Senhor dos Anéis", genero: "Fantasia" },
  { nome: "Interestelar", genero: "Ficção Científica" },
  { nome: "A Origem", genero: "Suspense" },
  { nome: "Clube da Luta", genero: "Drama" },
  { nome: "Forrest Gump", genero: "Drama" },
  { nome: "Vingadores: Ultimato", genero: "Ação" }
];

let coresGenero = {
  "Ação": "#e74c3c",
  "Fantasia": "#8e44ad",
  "Ficção Científica": "#2980b9",
  "Suspense": "#f39c12",
  "Drama": "#2ecc71"
};

let emojiGenero = {
  "Ação": "🔥",
  "Fantasia": "🧙‍♂️",
  "Ficção Científica": "🚀",
  "Suspense": "🕵️‍♂️",
  "Drama": "🎭"
};

let filmeAtual = null;

function setup() {
  createCanvas(400, 400);
  let botao = createButton("Recomendar Filme");
  botao.position(10, 420);
  botao.mousePressed(recomendarFilme);
  textAlign(CENTER, CENTER);
  textSize(24);
}

function draw() {
  if (filmeAtual) {
    background(coresGenero[filmeAtual.genero] || 220);
    textSize(20);
    text("Filme recomendado:", width / 2, height / 2 - 80);
    textSize(36);
    text(filmeAtual.nome, width / 2, height / 2 - 30);
    textSize(28);
    text(`${emojiGenero[filmeAtual.genero] || ""} ${filmeAtual.genero}`, width / 2, height / 2 + 30);
  } else {
    background(220);
    textSize(24);
    text("Clique no botão para receber uma recomendação!", width / 2, height / 2);
  }
}

function recomendarFilme() {
  let indice = floor(random(filmes.length));
  filmeAtual = filmes[indice];
}
