var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    $('#main').append('<button id="joinRoom">Join Room</button>')
    $('#joinRoom').on('click', function(){
      App.fetch();
    })
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var object = {};
    object.username = App.username;
    object.text = document.getElementById('message').value;
    if ($('#rooms select')[0][$('#rooms select')[0].selectedIndex] !== undefined) {
      object.roomname = $('#rooms select')[0][$('#rooms select')[0].selectedIndex].value;
    } else {
      object.roomname = undefined;
    }
    Parse.create(object);
    document.getElementById('message').value = '';
    App.fetch();
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};