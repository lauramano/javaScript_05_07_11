'use strict';
console.log('objekto key ir value reiksmiu paemimas');


// objektas tai yra {key : value} savybes
const userArray = ["Serbrntautas", ' 26', 'Vilnius', 'serbentautas@gmail.com' ];
//  user1 yra OBJEKTAS
const user1={
    firstName: "Serbrntautas",
    age: 26,
    town: 'Vilnius',
    email: 'serbentautas@gmail.com',
};
//  ================ savybe galime gauti reiksme kitaip
const savybe = "email";
console.log('masyvo userArrey reiksmes (value)', userArray);
console.log('user1 OBJEKTAS bus atspausdintas pagal abecele: ', user1);
console.log('user1 pirma reiksme :', user1['firstName']);
console.log('Ar tai masyvas(grazins true arba folse)', Array.isArray(user1));
console.log( 'Objekta galima atspausdinti ir su tasku user1.age :', user1.age);
user1.age = 101;
console.log(user1.age);

console.log('objekto user1 key value galima paimti panaudojus savybe user1[email] :', user1[savybe]);

// su [lauztiniais skliaustais issitraukiame savybe]
// user1['firstName'] (yra tas pats jei parasysim) user1.firstName

// i objekta prideti reiksme galime user1.country = 'Lietuva' kur country - key  / Lietuva - value
user1.country = 'Lietuva';
console.log('pridejom objektyvui key ir value:', user1.country);