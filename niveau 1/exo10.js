let n = parseInt(prompt("Entrez le nombre de termes de la suite de Fibonacci a afficher :"));

let terme1 = 0;
let terme2 = 1;

console.log(terme1); 

if (n >= 2) {
  console.log(terme2); 

  for (let i = 3; i <= n; i++) {
    let termeSuivant = terme1 + terme2;
    console.log(termeSuivant); 

    terme1 = terme2;
    terme2 = termeSuivant;
  }
}
