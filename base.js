var $board, $columns, $blocks;

function hide_element() {
  if ( $(this).hasClass('stuck') ) {
    return false
  }
  $(this).remove()//css('visibility', "hidden")
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

function random_gem() {
  $($blocks[Math.floor(Math.random() * $blocks.length)]).addClass('gem')
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

  // randomize background colors
  $blocks = $('div.block');
  randomize_block_colors($blocks)

  // set gameboard and block heights relative to window
  var window_height = $(window).height()
  $columns.css('height', window_height)
  $blocks.css('height', window_height/blocks)

  $(window).on('resize', function(){
    window_height = $(this).height()
    $columns.css('height', window_height)
    $blocks.css('height', window_height/blocks)
  });

  // set game listeners
  $blocks.on('mouseleave', hide_element)
  $blocks.on('click', stick_element)

  // create some drama
  setInterval(random_gem, 100)

}

$(document).ready(function(){

  build_gameboard(20,20)

});
