'use strict';
const u1 = "Arturas";
const u2 = "Bernelis";
const u3 = "Pagalys";

// array yra masyvas
const names = ["Arturas", "Bernelis", "Pagalys" ];
console.log(names);
console.log(names[1]);

let numbers = [1, 5, 9, 12];
console.log(numbers);
// ivairiu tipu masyvas

const mixed = [45, "James", true, null, [5, 6]];
console.log(mixed);
console.log(mixed[4][1]);

const colors = ['red', 'green', 'blue'];
// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);

for( let i=0;  i<3; i++){
    console.log(colors[i]);
}
// pasirasyti for cikliuka :)
numbers = [46, 1, 4, 78, 9, 5, 1, 4, 5, 5, 6];
console.log(numbers);
console.log(numbers.length);
// atspausdinti paskutini nari
console.log(numbers[numbers.length - 1]);   
for(let i = 0; i<numbers.length; i++){
    console.log(`skaicius ${numbers[i]}`)
}