let nombreAleatoire = Math.floor(Math.random() * 100) + 1;
let test = parseInt(prompt("Devinez le nombre entre 1 et 100 :"));

if (test > nombreAleatoire) {
  console.log("Trop grand");
} else if (test < nombreAleatoire) {
  console.log("Trop petit");
} else {
  console.log("Bravo !");
}
