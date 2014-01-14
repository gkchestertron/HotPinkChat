$(function() {
  var socket = io.connect();
  var $form = $(".message-input");
  var $feed = $(".message-display");
  var $nickname = $('#nickname');
  var $nicknameForm = $('.nickname-change')

  $form.on("submit", function(event) {
    event.preventDefault();
    var message = $form.find('textarea').val();
    socket.emit("submit-message", message);
  });

  socket.on("new-message", function(data) {
    $p = $("<p>");
    $p.text(data);
    $feed.append($p);
  });

  socket.on("nicknameChangeResult", function (data) {
    if (data.message) {
      alert(data.message)
    } else {
      $nickname.text(data);
    }
  });

  $nicknameForm.on("submit", function (event) {
    event.preventDefault();
    var nickname = $nicknameForm.find('#nickname-input').val();
    socket.emit("nicknameChangeRequest", nickname);
  });

});