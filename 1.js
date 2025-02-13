const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

const reversed_colors = [];
for(let i = 0; i < colors.length; i++){
  const col = colors[i];
  reversed_colors.unshift(col);
}
console.log(reversed_colors);
console.log(colors);