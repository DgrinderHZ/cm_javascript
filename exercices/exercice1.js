let a = 5;
let i = 3;
let f = 10;

i = prompt("Donner i:");
f = prompt("Donner f:");
console.log(`L'intervalle est : [${i}, ${f}]`);
a = prompt("Donner a:");

i = parseInt(i);
f = parseInt(f);
a = parseInt(a);

if (a <= f && a >= i) {
  console.log(`${a} appartient à l'intervalle est : [${i}, ${f}]`);
} else {
  console.log(`${a} n'appartient pas à l'intervalle est : [${i}, ${f}]`);
}
