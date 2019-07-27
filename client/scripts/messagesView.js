var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(data) {
    var html = "";
    var obj;
    if (data['results']) {
      obj = data['results'];
    } else {
      obj = data;
    }
    if (Array.isArray(obj)) {
      for (i = 0; i < obj.length; i++) {
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
    } else {
      if (obj['username'] && obj['text']) {
        var lt = /</g,
        gt = />/g,
        ap = /'/g,
        ic = /"/g;
        var username = obj.username.replace(lt, "&lt;").replace(gt, "&gt;").replace(ap, "&#39;").replace(ic, "&#34;");
        obj['username'] = username;
        var text = obj.text.replace(lt, "&lt;").replace(gt, "&gt;").replace(ap, "&#39;").replace(ic, "&#34;");
        obj['text'] = text;
        html += MessageView.render(obj);
      }
    }
    $('#chats').append(html);
  }

};