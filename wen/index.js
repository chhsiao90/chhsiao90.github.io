import chars from './chars.js';

const charMap = chars.reduce((accu, { origin, split }) => ({
  ...accu, [origin]: split,
}), {});

const generateResult = (words, errors) => `
<h4 class="alert alert-light">
  結果：輸入共 ${words.length} 筆資料，有 ${errors.length} 筆資料錯誤
</h4>
${errors.map(err => `<div>${err}</div>`).join('')}
`;

const check = (word) => {
  if ([...word].some(ch => charMap[ch])) {
    const replaced = [...word].map(ch => charMap[ch] || ch).join('');
    return `${word} => ${replaced}`;
  }
  return undefined;
};

document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#input');
  const output = document.querySelector('#output');

  document.querySelector('.submit').addEventListener('click', () => {
    const text = input.value;
    const words = text.split(/\n/).filter(word => word);
    const errors = words.map(check).filter(word => word);
    output.innerHTML = generateResult(words, errors);
  });

  document.querySelector('.clear').addEventListener('click', () => {
    input.value = '';
    output.innerHTML = '';
  })
}); 
