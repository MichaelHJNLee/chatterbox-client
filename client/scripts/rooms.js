var Rooms = {
  roomName: [],
  add: function (){
    $('#rooms')[0].children[1].id = "add"
    $("#add").on('click', function() {
      RoomsView.renderRoom(document.getElementById('message').value);
      document.getElementById('message').value = '';
  })
  },
  load: function(data){
    for (var i = 0; i < data.results.length; i++) {
      if (data.results[i].roomname && !Rooms.roomName.includes(data.results[i].roomname)) {
        Rooms.roomName.push(data.results[i].roomname);
        $('#rooms select').append(`<option value="${data.results[i].roomname}">${data.results[i].roomname}</option>`);
      }
    }
  }

 };