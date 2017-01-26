function updateCounters() {
  var ntodos = $('.todo').length;
  var ncompleted = $('.completed').length;

  $('#total-count').html(ntodos);
  $('#completed-count').html(ncompleted);
  $('#todo-count').html(ntodos - ncompleted);
}

function toggleDone() {
  var checkbox = this;

  $(checkbox).parent().toggleClass("completed");

  updateCounters();
}

function submitTodo() {
  event.preventDefault();

  var title = $('#new-todo').val();

  createTodo(title);

  $('#new-todo').val(null);

  function createTodo(title) {
    var checkboxId = "todo-" + nextTodoId();

    var listItem = $("<li></li>");
    listItem.addClass("todo");

    var checkbox = $('<input>');
    checkbox.attr('type', 'checkbox');
    checkbox.attr('id', checkboxId);
    checkbox.val(1);
    checkbox.bind('change', toggleDone);

    var label = $('<label></label>');
    label.attr('for', checkboxId);
    label.addClass('label');
    label.html(title);

    listItem.append(checkbox);
    listItem.append(label);

    $("#todolist").append( listItem );

    updateCounters();
  }

  function nextTodoId() {
    return $(".todo").length + 1;
  }
}

function cleanUpDoneTodos(event) {
  event.preventDefault();
  $.when($(".completed").remove())
    .then(updateCounters);
}

$(document).ready(function () {
  $('input[type=checkbox]').bind('change', toggleDone);
  $('form').bind('submit', submitTodo);
  $("#clean-up").bind('click', cleanUpDoneTodos);
  updateCounters();
});
