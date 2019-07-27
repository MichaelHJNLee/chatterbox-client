var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(data) {
    var html = "";
    for (i = 0; i < data.results.length; i++) {
      if (data.results[i].username && data.results[i].text) {
        html += MessageView.render(data.results[i]);
      }
    }
    this.$chats.append(html);
  }

};