var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  flag: false,
  initialize: function() {
    if (this.flag === false) {
      this.$select.append('<option value="Lobby">Lobby</option>',
      '<option value="Group Chat">Group Chat</option>',
      '<option value="Ingrid">Ingrid</option>',
      '<option value="Jason Li">Jason Li</option>');
      $('#rooms').append('<input type="text" name="newroom" id="newroom"/>');
      this.flag = true;
    }
    $(this.$button).on('click', function() {
        RoomsView.render();
        document.getElementById('newroom').value = '';
    })
  },

  render: function() {
    this.$select.append(`<option value="${document.getElementById('newroom').value}">${document.getElementById('newroom').value}</option>`)
  }

};
