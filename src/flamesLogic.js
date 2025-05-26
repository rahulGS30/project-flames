export function getFlamesResult(name1, name2) {
  name1 = name1.toLowerCase().replace(/\s/g, '');
  name2 = name2.toLowerCase().replace(/\s/g, '');
  let common = 0;
  for (let char of name1) {
    if (name2.includes(char)) {
      name2 = name2.replace(char, '');
      common++;
    }
  }
  let count = name1.length + name2.length - 2 * common;
  const flames = ['Friends', 'Love', 'Affection', 'Marriage', 'Enemies', 'Siblings'];
  let index = 0;
  while (flames.length > 1) {
    index = (index + count - 1) % flames.length;
    flames.splice(index, 1);
  }
  return flames[0];
}