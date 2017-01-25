function updateCounters() {
  var ntodos = $('.todo').length;
  var ncompleted = $('.completed').length;

  $('#total-count').html(ntodos);
  $('#completed-count').html(ncompleted);
  $('#todo-count').html(ntodos - ncompleted);
}

updateCounters();
