// Every call to action opens WhatsApp to Yael with a ready message (data-wa="…").
const PHONE = '972506976125';
document.querySelectorAll('[data-wa]').forEach((a) => {
  a.href = `https://wa.me/${PHONE}?text=${encodeURIComponent(a.dataset.wa)}`;
});
