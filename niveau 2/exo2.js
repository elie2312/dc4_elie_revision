let tableauOriginal = ["Chat", "Chien", "oiseau", "Souris", "cheval"];


function obtenirMotsPremiereLettreMajuscule(tableau) {
    let motsPremiereLettreMajuscule = [];
  
    for (let i = 0; i < tableau.length; i++) {
      let mot = tableau[i];
  
      if (mot[0] === mot[0].toUpperCase()) {
        motsPremiereLettreMajuscule.push(mot);
      }
    }
  
    return motsPremiereLettreMajuscule;
  }

let motsPremiereLettreMajuscule = obtenirMotsPremiereLettreMajuscule(tableauOriginal);
console.log(motsPremiereLettreMajuscule);
