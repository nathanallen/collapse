function hide_element() {
  $(this).remove()
  check_for_winner()
}

function check_for_winner(){
  if ($('div.block').length == 0) {
    console.log('You win!')
  }
}

$(document).ready(function(){
  $('div.block').on('mouseover', hide_element)
});