const btn = document.getElementById('clickBtn');
const countEl = document.getElementById('count');

let count = 0;

btn.addEventListener('click', () => {
  count += 1;
  countEl.textContent = count;
});