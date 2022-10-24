const palette = {
    0: 'red',
    1: 'yellow',
    2: 'green',
    3: 'cyan',
    4: 'blue',
    5: 'magenta',
    6: 'white'
  }
  const input  = 'Rainbow!';
const template = ' 0123456';
 
const output = paint(input, template, palette);
console.log(output);