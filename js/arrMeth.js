'use strict';
console.log('Metodu panaudijimas masyvuose');
//  Metodai reindeksuojantys masyvus (keiciasi eiles nr.)

const colors = ['green', 'blue', 'red'];
console.log('orginalus masyvas', colors);

// array.push() prideda i masyvo gala ir modifikuoja masyva

const pushResult = colors.push('violet');
console.log('pushResult atspausdina reiksme', pushResult);
console.log('modifikuotas masyvas su pridetu elementu', colors);

// array.unshift('nauja reiksme') - prideda reiksme i prieki

const unshiftResult = colors.unshift('white');
console.log('unshiftResult atspausdina reiksme', unshiftResult);
console.log('modifikuotas masyvas su pridetu elementu', colors);

//  ===========            ===================

//  ==============               =================
// array.shift - nuima reiksme nuo priekio  ir ja pasiima

const shiftResult = colors.shift();
console.log('unshiftResult atspausdina reiksme', shiftResult);
console.log('modifikuotas masyvas su nuimtu elementu', colors);

// array.pop() - nuima reiksme nuo galo. ir ja pasiima

const popResult = colors.pop();
console.log('popResult atspausdina reiksme', popResult);
console.log('modifikuotas masyvas su nuimtu elementu', colors);

//  ============ Nemodifikuojantis masyvo =======================

// array.slice(start, finish) (iskeliau funkcija kad paimtu ilgiausia masyva)
let sliceResult = colors.slice();
sliceResult = colors.slice(2, 5); // nuo 3 elemento iki 5
sliceResult = colors.slice(-1); // Paskutine reiksme (-2 dvi paskutines reiksmes)
console.log('funcijos slice rezultatas', sliceResult);
console.log('modifikuotas masyvas su nuimtu elementu', colors);

const manPatinka = ['lietus', 'sniegas', 'saule'];
const maNepatinka = ['krusa', 'speigas', 'debesys'];

// array.concat() sujungia du masyvus gali jungti ir daugiau
let manResult = manPatinka.concat(maNepatinka);
const manResultResult = manResult.concat('Apelsinas');
console.log(manResultResult);
console.log(manPatinka);
console.log(maNepatinka);
console.log('array.concat masyvo rezultatas', manResult);

// array.splice() (dievazi daro viska.... pasalinti ir prideti vienu metu pirmas prideda antras kiek reikia pasalinti) 
// keicia orginala

const masyvas = ['asara', 'lietus', 'voras', 'pavasaris']
const masyvasResult = masyvas.splice(0, 0, "Lemon", "Kiwi");
console.log('Pradinis masyvas', masyvas );
console.log('Modifikuotas masyvas', masyvasResult );

// pasitikrinimas ar tai masyvas ir ka grazina reiksmes

console.log('const colors tipas ', typeof colors);
console.log('Ar tai masyvas(grazins true oaba folse)', Array.isArray(colors));