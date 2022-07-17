'use stricts';
console.log('labas Funkcija :)))');



function greet(user){
    // let user = "Mindaugai"
    console.log(`labas ${user}`);   // funkcijos aprasymas
}

/* 
function - nusako, kad bus aprasyta funkcija
greet - funkcijos pavadinimas, su ja bus iskvieciama
() - argumentams
user - argumentas
{} - aprasymas kas bus daroma, kai ta funkcija bus iskviesta
return - direktyva naudojama grazinti reiksmes ir nutraukti funkcijos vykdyma
*/

// funkcijos iskvietimas
greet("Mindaugai");
greet("Karoli");

const user1={
    firstName: "Serbrntautas",
    age: 26,
    town: 'Vilnius',
    email: 'serbentautas@gmail.com',
    // metodas
    greet: function(){
        console.log('Hello world');        //  metodo aprasymas
    }
};
user1.greet();

// sukurti funkcija kuri sudeda dvi reiksmes
function addNums(n1, n2){
    const sum = n1 + n2;
    console.log(`jei ${n1} sudesim su ${n2} tai gausis: ${sum}`);
    return sum;
}
const sum1 = addNums(5, 7);
const sum2 = addNums(101, 77);
console.log('sum 1: = ', sum1);
console.log('sum 2: = ', sum2);

addNums(sum1, sum2);

addNums(11, 774);
addNums(4, 747);
addNums(12, 747);
addNums(1, 747);
