function hide_element() {
  if ( $(this).hasClass('stuck') ) {
    return false
  }
  $(this).remove() //.css('visibility', "hidden")
  check_for_winner()
}

function stick_element() {
  $(this).addClass('stuck')
}

function check_for_winner(){
  if ($('div.block').length == 0) {
    console.log('You win!')
  }
}

function build_gameboard(columns,blocks){
  for (var i = 0; i < columns; i++) {
    $('body#app').append("<div class='column'></div>")
  }

  for (var i = 0; i < blocks; i++) {
    $('div.column').append("<div class='block'></div>")
  }

  $('div.block').on('mouseleave', hide_element)
  $('div.block').on('click', stick_element)
}

$(document).ready(function(){

  build_gameboard(10,5)

});