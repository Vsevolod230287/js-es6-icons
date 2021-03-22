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


const animals = icons.filter((item) => {
  return item.type == 'animal';
})

const vegetables = icons.filter((item) => {
  return item.type == 'vegetable';
})

const users = icons.filter((item) => {
  return item.type == 'user';
})

icons.forEach((item, i, array) => {
	$('.template .card').html(`<i class="${item.family} ${item.prefix}${item.name}"></i>`);
  if(item.type == 'animal'){
		 $(`.template .card i.${item.family}.${item.prefix}${item.name}`).addClass('animals');
	}else if (item.type == 'vegetable') {
    $(`.template .card i.${item.family}.${item.prefix}${item.name}`).addClass('vegetables');
	}else if (item.type == 'user') {
    $('.template .card i').addClass('users');
	}
	let cardClone = $('.template .card').clone()
	$('div.canvas').append(cardClone);




});


$("select").change(function() {

  icons.forEach((item, i, array) => {
		$('.template .card').html(`<i class="${item.family} ${item.prefix}${item.name}"></i>`);
    if(item.type == 'animal'){
       $(`.template .card i.${item.family}.${item.prefix}${item.name}`).addClass('animals');
    }else if (item.type == 'vegetable') {
      $(`.template .card i.${item.family}.${item.prefix}${item.name}`).addClass('vegetables');
    }else if (item.type == 'user') {
      $('.template .card i').addClass('users');
    }
    let cardClone = $('.template .card').clone()
    $('div.canvas').append(cardClone);

  });

  if ($(this).val() == 'all') {

    icons.forEach((item, i) => {
      $('.canvas .card').remove();
    });

    icons.forEach((item, i, array) => {
			$('.template .card').html(`<i class="${item.family} ${item.prefix}${item.name}"></i>`);
      if(item.type == 'animal'){
         $(`.template .card i.${item.family}.${item.prefix}${item.name}`).addClass('animals');
      }else if (item.type == 'vegetable') {
        $(`.template .card i.${item.family}.${item.prefix}${item.name}`).addClass('vegetables');
      }else if (item.type == 'user') {
        $('.template .card i').addClass('users');
      }
      let cardClone = $('.template .card').clone()
      $('div.canvas').append(cardClone);
    });
  } else if ($(this).val() == 'animal') {

    icons.forEach((item, i) => {
      $('.canvas .card').remove();
    });

    animals.forEach((item, i, array) => {
			$('.template .card').html(`<i class="${item.family} ${item.prefix}${item.name}"></i>`);
      if(item.type == 'animal'){
         $(`.template .card i.${item.family}.${item.prefix}${item.name}`).addClass('animals');
      }else if (item.type == 'vegetable') {
        $(`.template .card i.${item.family}.${item.prefix}${item.name}`).addClass('vegetables');
      }else if (item.type == 'user') {
        $('.template .card i').addClass('users');
      }
      let cardClone = $('.template .card').clone()
      $('div.canvas').append(cardClone);
    })
  } else if ($(this).val() == 'vegetable') {

    icons.forEach((item, i) => {
      $('.canvas .card').remove();
    });

    vegetables.forEach((item, i, array) => {
			$('.template .card').html(`<i class="${item.family} ${item.prefix}${item.name}"></i>`);
      if(item.type == 'animal'){
         $(`.template .card i.${item.family}.${item.prefix}${item.name}`).addClass('animals');
      }else if (item.type == 'vegetable') {
        $(`.template .card i.${item.family}.${item.prefix}${item.name}`).addClass('vegetables');
      }else if (item.type == 'user') {
        $('.template .card i').addClass('users');
      }
      let cardClone = $('.template .card').clone()
      $('div.canvas').append(cardClone);
    })
  } else if ($(this).val() == 'user') {

    icons.forEach((item, i) => {
      $('.canvas .card').remove();
    });

    users.forEach((item, i, array) => {
			$('.template .card').html(`<i class="${item.family} ${item.prefix}${item.name}"></i>`);
      if(item.type == 'animal'){
         $(`.template .card i.${item.family}.${item.prefix}${item.name}`).addClass('animals');
      }else if (item.type == 'vegetable') {
        $(`.template .card i.${item.family}.${item.prefix}${item.name}`).addClass('vegetables');
      }else if (item.type == 'user') {
        $('.template .card i').addClass('users');
      }
      let cardClone = $('.template .card').clone()
      $('div.canvas').append(cardClone);
    })
  }
});
