var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(data) {
    var html = "";
    for (i = 0; i < data.results.length; i++) {
      // if (data.results[i].username && data.results[i].text && (data.results[i].username.includes('<') || data.results[i].text.includes('<'))){
      //   continue;
      // }
      if (data.results[i].username && data.results[i].text) {
        var lt = /</g,
        gt = />/g,
        ap = /'/g,
        ic = /"/g;
        var username = data.results[i].username.replace(lt, "&lt;").replace(gt, "&gt;").replace(ap, "&#39;").replace(ic, "&#34;");
        data.results[i].username = username;
        var text = data.results[i].text.replace(lt, "&lt;").replace(gt, "&gt;").replace(ap, "&#39;").replace(ic, "&#34;");
        data.results[i].text = text;
        html += MessageView.render(data.results[i]);
      }
    }
    this.$chats.append(html);
  }

};