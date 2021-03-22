// Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
// ES. [1,2,3,4,5,6,7,8] => [3,4,5,6] (a=2, b=5)
//
//Usiamo i nuovi metodi degli array foreach o filter

const array = [0, 2, 3, 4, 5, 6, 7, 8, 9];

let a = 3;
let b = 6;

const mySlice = (array, min, max) => {
  const arr = array.slice(min-1, max);
   return arr;
}
const arr = mySlice(array, a, b)
arr.forEach((item, i) => {
  $('div.box ul').append(`<li>${item}</li>`)
});

// function mySlice(array, min, max ) {
//  const arr = array.slice(min-1, max);
//  console.log(arr);
//
//   return arr;
//   }
