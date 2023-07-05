let tableau = ['chien','chat' ,'elephant' ,'aigle'];

let motPlusLong = "";

for (let i = 0; i < tableau.length; i++) {
  if (tableau[i].length > motPlusLong.length) {
    motPlusLong = tableau[i];
  }
}

console.log("Le mot le plus long est : " + motPlusLong);