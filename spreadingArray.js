const number = [1,2,3,4,32,3,45,14];
// console.log(...number)
// console.log(Math.max(...number))


const newArray = [234,345,232,567,232];

const combine = [...newArray, ...number];
// console.log(...combine);



const [a,b, ...next] = number;
// console.log(next);

const x = [1,2,3];

const y = [...x];


// if we don't use spreading we use loop
// for(let i of x){
//     y.push(i);
// }



x.push(25);

console.log('X: ');
console.log('Y: ');
