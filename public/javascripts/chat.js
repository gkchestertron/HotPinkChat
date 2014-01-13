$(function() {
  var socket = io.connect();
  var $form = $(".message-input");
  var $feed = $(".message-display");

  $form.on("submit", function(event) {
    event.preventDefault();
    var message = $form.find('textarea').val();
    console.log('submitting', message);
    socket.emit("submit-message", message);
  });

  socket.on("new-message", function(data) {
    $p = $("<p>");
    $p.text(data);
    $feed.append($p);
  });
});