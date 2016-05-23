var pingPong = require('./../js/ping-pong.js').pingPong;

$(document).ready(function(){
  $('#ping-pong').submit(function(event){
    event.preventDefault();
    var goal = $('#goal').val();
    var output = pingPong(goal);
    output.forEach(function(element){
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

var Message = require('./../js/message.js').Message;
$(document).ready(function(){
  $('#email').submit(function(event){
    event.preventDefault();
    var toField = $('#to').val();
    var fromField = $('#from').val();
    var messageField = $('#message').val();

    var newMessage = new Message(toField, fromField, messageField);
    console.log(newMessage.read());

    // $()
  });
});
