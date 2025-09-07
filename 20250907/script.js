const btn = document.getElementById('clickBtn');
const countEl = document.getElementById('count');

let count = 0;

btn.addEventListener('click', () => {
  count += 1;
  countEl.textContent = count;
  console.log(`여친 만들기 ${count} 번째 시도중...`);
});