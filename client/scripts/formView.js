var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var object = {};
    object.username = App.username;
    object.text = document.getElementById('message').value;
    object.roomname = $('#rooms select').value;
    console.log(object.roomname)
    Parse.create(object);
    document.getElementById('message').value = '';
    App.initialize();
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};