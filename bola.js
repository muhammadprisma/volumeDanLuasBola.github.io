/* sebuah bola memiliki jari-jari bebas, tentukan :

a. Luas permukaan Bola?
b. Volume Bola?

*/


const pi = 3.14;
var r = 10;
let diameter = 0;
let volume = 0;
let luas = 0;

diameter = 2*r;

volume = 4/3*pi*r*r*r;

luas = 4*pi*r*r;

console.log(`Diketahui Jari-Jari = ${r}`);
console.log("=================================================================================");
console.log(`Maka besar Diameternya adalah = ${diameter} ,`);
console.log(`Luas Permukaannya adalah = ${luas} ,`);
console.log(`serta Volume Bolanya adalah = ${volume}`);