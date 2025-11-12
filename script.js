
function toggleDrawer(force) {
  const drawer = document.getElementById('drawer');
  const open = typeof force === 'boolean' ? force : !drawer.classList.contains('open');
  drawer.classList.toggle('open', open);
  drawer.setAttribute('aria-hidden', String(!open));
}
document.addEventListener('keyup', (e) => { if (e.key === 'Escape') toggleDrawer(false) });

function submitForm(e) {
  e.preventDefault();
  const f = new FormData(e.target);
  const name = f.get('name');
  const phone = (f.get('phone') || '').replace(/\D/g, '');
  const goal = f.get('goal');
  const msg = f.get('msg') || '';
  const text = encodeURIComponent(`Olá! Sou ${name}. Meu objetivo: ${goal}. ${msg}`);
  const link = `https://wa.me/55${phone}?text=${text}`;
  document.getElementById('formStatus').textContent = 'Abrindo WhatsApp…';
  setTimeout(() => { window.open(link, '_blank'); document.getElementById('formStatus').textContent = ''; }, 400);
  return false;
}

document.getElementById('year').textContent = new Date().getFullYear();
