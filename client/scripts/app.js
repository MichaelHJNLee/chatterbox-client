var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  reload: function(){
    $.get(`${Parse.server}`, function(data) {
      //$('#chats').html('');
      MessagesView.renderMessage(data);
    })
    // $('#chats').load(`${Parse.server}`, function(data) {
    //   // $('#chats').html('');
    //   MessagesView.renderMessage(data);
    // })
  },

  initialize: function() {
    App.username = window.location.search.substr(10);
    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    setInterval(function(){
      App.reload()
    }, 5000)

  },

  fetch: function(callback = ()=>{}) {

    Parse.readAll((data) => {
      MessagesView.renderMessage(data);
    })
    callback();
    },

    //   setTimeout(function(){
    //     callback(Parse.readAll((data) => {
    //       // examine the response from the server request:
    //       //console.log(data.results);
    //       MessagesView.renderMessage(data);
    //     }))
    //   }, 5000);
    // }

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
