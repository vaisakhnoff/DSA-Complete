let str = "How are you ?";

let result = str.split(' ').map((value)=> value.split('').reverse().join('')).join(' ');

console.log(result);
