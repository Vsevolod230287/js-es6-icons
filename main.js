const icons = [{
    name: 'cat',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas'
  },
  {
    name: 'crow',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas'
  },
  {
    name: 'dog',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas'
  },
  {
    name: 'dove',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas'
  },
  {
    name: 'dragon',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas'
  },
  {
    name: 'horse',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas'
  },
  {
    name: 'hippo',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas'
  },
  {
    name: 'fish',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas'
  },
  {
    name: 'carrot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas'
  },
  {
    name: 'apple-alt',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas'
  },
  {
    name: 'lemon',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas'
  },
  {
    name: 'pepper-hot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas'
  },
  {
    name: 'user-astronaut',
    prefix: 'fa-',
    type: 'user',
    family: 'fas'
  },
  {
    name: 'user-graduate',
    prefix: 'fa-',
    type: 'user',
    family: 'fas'
  },
  {
    name: 'user-ninja',
    prefix: 'fa-',
    type: 'user',
    family: 'fas'
  },
  {
    name: 'user-secret',
    prefix: 'fa-',
    type: 'user',
    family: 'fas'
  }
];


icons.forEach((item, i, array) => {
console.log(array.length);
	$('.template .card i').addClass(`${item.family} ${item.prefix}${item.name}`)
  let cardClone = $('.template .card').clone()
  $('div.canvas').append(cardClone);

});

let a = $( "select" ).val();
console.log(a);
$( "select" )
  .change(function () {
 console.log($(this).val());
  })
