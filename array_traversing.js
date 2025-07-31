const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let data = [12, 1, 0, 55, 8, 554, 9696, 45, 22]
// for (let i = 0; i < data.length; i ++) {
//     console.log(`Array ${i} is ${data[i]}`);    
// }

rl.question('Entet a index number of data Array :- ',(input) => {
    console.log(`The value if index ${input} of data Array is ${data[input]}`);
})