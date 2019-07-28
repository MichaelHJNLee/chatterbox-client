var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  flag: false,
  initialize: function() {
    // if (this.flag === false) {
    //   this.$select.append('<option value="Lobby">Lobby</option>',
    //   '<option value="Group Chat">Group Chat</option>',
    //   '<option value="Ingrid">Ingrid</option>',
    //   '<option value="Jason Li">Jason Li</option>');
    //   $('#rooms').append('<input type="text" name="newroom" id="newroom"/>');
    //   this.flag = true;
    // }
    Rooms.add();
    //Rooms.load();
  },

  renderRoom: function(roomname) {
    if (roomname !== '') {
      this.$select.append(`<option value="${roomname}">${roomname}</option>`);
      $('#rooms select')[0].selectedIndex = $('#rooms select')[0].childElementCount - 1;
    }
    // this.$select.append(`<option value="${document.getElementById('newroom').value}">${document.getElementById('newroom').value}</option>`)
  }

};
