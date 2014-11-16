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
  for (var i = 0; i < columns; i++) {
    $('body#app').append("<div class='column'></div>")
  }

  for (var i = 0; i < blocks; i++) {
    $('div.column').append("<div class='block'></div>")
  }

  randomize_block_colors($('div.block'))

  $('div.block').on('mouseleave', hide_element)
  $('div.block').on('click', stick_element)
}

$(document).ready(function(){

  build_gameboard(10,50)

});