const list = document.getElementById('list');
const targets = Array.from(list.childNodes);
targets.forEach((target) => {
  target.addEventListener('mouseover', () => target.style.visibility='hidden');
})