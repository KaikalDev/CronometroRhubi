// troque pela data real da viagem
const eventDate = new Date();
eventDate.setDate(eventDate.getDate() + 25);
eventDate.setHours(8, 0, 0, 0);

async function carregarDestino() {
  try {
    const resposta = await fetch('Data/destinos.txt');

    if (!resposta.ok) {
      throw new Error('Não foi possível carregar destinos.txt');
    }

    const texto = await resposta.text();

    // Cada linha do TXT vira um destino
    const destinos = texto
      .split(/\r?\n/)
      .map(linha => linha.trim())
      .filter(linha => linha.length > 0);

    if (destinos.length === 0) {
      throw new Error('O arquivo destinos.txt está vazio');
    }

    // Escolhe uma linha aleatória
    const destino = destinos[Math.floor(Math.random() * destinos.length)];

    document.getElementById('destinoHeadline').textContent = destino;
    document.getElementById('destinoNota').textContent = destino;

  } catch (erro) {
    console.error('Erro ao carregar destinos:', erro);
  }
}

carregarDestino();

function pad(n) {
  return String(n).padStart(2, '0');
}

function tick() {
  const now = new Date();
  let diff = eventDate - now;

  if (diff <= 0) {
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    document.getElementById('daysHeadline').textContent = '0';
    return;
  }

  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  document.getElementById('days').textContent = pad(d);
  document.getElementById('hours').textContent = pad(h);
  document.getElementById('minutes').textContent = pad(m);
  document.getElementById('seconds').textContent = pad(s);
  document.getElementById('daysHeadline').textContent = d;
}

tick();
setInterval(tick, 1000);