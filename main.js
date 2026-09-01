// troque pela data real da viagem
const eventDate = new Date();
eventDate.setDate(eventDate.getDate() + 25);
eventDate.setHours(8, 0, 0, 0);

function pad(n){ return String(n).padStart(2, '0'); }

function tick(){
  const now = new Date();
  let diff = eventDate - now;

  if (diff <= 0){
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