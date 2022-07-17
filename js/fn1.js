'use strict';

function getSienuPlotas(ilgis, plotis, aukstis) {
    const perimetras = (ilgis + plotis) * 2;
    const plotas = perimetras * aukstis;
    console.log( 'Sienu plotas ', plotas);
    return plotas;
}
// console.log('sienu plotas', plotas);
      
function printToHTML(reiksme){
    const divEl = document.getElementById('app');
    // divEl.innerHTML = `<p> Apskaiciutas sienu plotas ${plotas} kv/m</p>`;
    const pEl = document.createElement ('p');
    pEl.textContent = `Apskaiciutas sienu plotas ${reiksme} kv/m`;
    // teviniselementas.append(ka ikelti);
    divEl.append(pEl);
}
// Skaiciuoja sienu plota
const siena1 = getSienuPlotas(10, 7, 3);
const siena2 =getSienuPlotas(10, 4, 3);
const siena3 =getSienuPlotas(10, 9, 3);


// Spausdina sienu plota
printToHTML(siena1);
printToHTML(siena2);
printToHTML(siena3);