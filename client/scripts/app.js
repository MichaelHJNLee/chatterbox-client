var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  reload: function(){
    setInterval(function(){
      App.fetch(App.stopSpinner);
    }, 8000)
    // $.get(`${Parse.server}`, function(data) {
    //   //$('#chats').html('');
    //   MessagesView.renderMessage(data);
    // })
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
    App.reload();
  },

  fetch: function(callback = ()=>{}) {
    var lastID;
    Parse.readAll((data) => {
      var roomLoad = false;
      if (!roomLoad) {
        Rooms.load(data);
        roomLoad = true;
      }
      if (!$('#chats')[0].childNodes){
        MessagesView.renderMessage(data);
        //Rooms.load(data);
        //lastID = data.results[0].objectId;
      } else {
        $('#chats').html('');
        MessagesView.renderMessage(data);
        for (var i = 0; i < $('.username').length; i++) {
          if (MessageView.friends.includes($('.username')[i].textContent)) {
            $('.username')[i].style.fontSize = '20px';
            $('.username')[i].style.color = 'pink';
          }
        }
        for (var i = 0; i < $('.roomname').length; i++) {

        }


        // var storage = [];
        // for (var i = 0; i < data.results.length; i++) {
        //   if (data.results[i].objectId !== lastID) {
        //     storage.push(data.results[i]);
        //   } else if (data.results[i].objectId === lastID) {
        //     break;
        //   }
        // }
        // lastID = storage[0].objectId;
        // for (var i = storage.length - 1; i >= 0; i--) {
        //   MessagesView.renderMessage(storage[i]);
        // }
      }
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
