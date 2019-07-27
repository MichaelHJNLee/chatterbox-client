var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);
    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    // Fetch initial batch of messages
    App.startSpinner();
    setInterval(App.fetch(App.stopSpinner), 5000);
    // setInterval(Parse.readAll((data)=> {
    //   MessagesView.render(data);
    // }, 5000))

  },

  fetch: function(callback = ()=>{}) {

    Parse.readAll((data) => {
      // examine the response from the server request:
      //console.log(data.results);
      MessagesView.render(data);

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
