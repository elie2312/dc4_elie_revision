let mot = prompt("Entrez un mot :");
let motInverse = mot.split("").reverse().join("");

if (mot.toLowerCase() === motInverse.toLowerCase()) {
  console.log(mot + " est un palindrome.");
} else {
  console.log(mot + " n'est pas un palindrome.");
}
