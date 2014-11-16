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
  if ($blocks.length == 0) {
    console.log('You win!')
  }
}

function random_color(){
  var hex = ["#"]
  while (hex.length < 7) {
    hex.push( Math.floor(Math.random() * 16).toString(16) )
  }
  return hex.join('')
}

function randomize_block_colors(el){
  var n = el.length
  for (var i = 0; i < n; i++) {
    $(el[i]).css('background-color', random_color())
  }
}

function build_gameboard(columns,blocks){
  $board = $('body#app');
  for (var i = 0; i < columns; i++) {
    $board.append("<div class='column'></div>")
  }

  $columns = $('div.column');
  for (var i = 0; i < blocks; i++) {
    $columns.append("<div class='block'></div>")
  }

  $blocks = $('div.block');
  randomize_block_colors($blocks)

  $blocks.on('mouseleave', hide_element)
  $blocks.on('click', stick_element)
}

$(document).ready(function(){

  build_gameboard(10,50)

});