let tableauOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nombresPairs = obtenirNombresPairs(tableauOriginal);

function obtenirNombresPairs(tableau) {
    let nombresPairs = [];
  
    for (let i = 0; i < tableau.length; i++) {
      if (tableau[i] % 2 === 0) {
        nombresPairs.push(tableau[i]);
      }
    }
  
    return nombresPairs;
  }
  

console.log(nombresPairs);
