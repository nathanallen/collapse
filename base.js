function hide_element() {
  $(this).remove() //.css('visibility', "hidden")
  check_for_winner()
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

  $('div.block').on('mouseover', hide_element)
}

$(document).ready(function(){

  build_gameboard(10,20)

});