// Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
// ES. [1,2,3,4,5,6,7,8] => [3,4,5,6] (a=2, b=5)

const array = [0, 2, 3, 4, 5, 6, 7, 8, 9];
let a = parseInt(prompt("Inserisci l'idice minore  per tagliare l'array originale(0-9): "));
let b = parseInt(prompt("Inserisci l'idice magiore  per tagliare l'array originale(0-9): "));

function mySlice(array, min, max) {
  const arrX = array.filter((item, i, array) => {
    return min <= array[i] && array[i] <= max
  })

 return arrX
}

const arr = mySlice(array, a, b)
arr.forEach((item, i) => {
  $('div.box ul').append(`<li>${item}</li>`)
});
