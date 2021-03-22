// Creare un array di oggetti: ogni oggetto descriverà una bici
// da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.
// Usiamo il forEach

const bici = [{
  nome: 'Elisabetta',
  peso: 10
}, {
  nome: 'Vincenzo',
  peso: 3
}, {
  nome: 'Frederick',
  peso: 6
}]

let min = bici[0].peso;

bici.forEach((item, i, array) => {
   if(min > item.peso){
     min = item.peso
   }
});

console.log(min);
