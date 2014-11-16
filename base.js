var $board, $columns, $blocks;

function pop_element() {
  if ( $(this).hasClass('stuck') ) {
    return false
  }
  $(this).css('position', 'absolute')
         .css('border', '7px dotted white')
}

function hide_element() {
  if ( $(this).hasClass('stuck') ) {
    return false
  }
  $(this).remove()//css('visibility', "hidden")
  // check_for_winner()
}

function stick_element() {
  $(this).addClass('stuck')
         .css('position', 'inherit')
         .css('border', '3px solid white')
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
  // put columns on the board
  $board = $('section#board');
  for (var i = 0; i < columns; i++) {
    $board.append("<div class='column'></div>")
  }

  // put blocks in columns, set column width to a fraction of 100%
  $columns = $('div.column');
  $columns.css('width', 100/columns + "%")
  for (var i = 0; i < blocks; i++) {
    $columns.append("<div class='block'></div>")
  }

  // set gameboard height
  $columns.css('height', $(window).height())
  $(window).on('resize', function(){
    $columns.css('height', $(this).height())
  });

  // randomize background colors
  $blocks = $('div.block');
  randomize_block_colors($blocks)

  // set listeners
  $blocks.on('mouseenter', pop_element)
  $blocks.on('mouseleave', hide_element)
  $blocks.on('click', stick_element)
}

$(document).ready(function(){

  build_gameboard(40,20)

});