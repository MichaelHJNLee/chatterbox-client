var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Friends.toggleStatus();
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
        if (data.results[i].username && data.results[i].text && data.results[i].roomname) {
          var lt = /</g,
          gt = />/g,
          ap = /'/g,
          ic = /"/g;
          var username = data.results[i].username.replace(lt, "&lt;").replace(gt, "&gt;").replace(ap, "&#39;").replace(ic, "&#34;");
          data.results[i].username = username;
          var text = data.results[i].text.replace(lt, "&lt;").replace(gt, "&gt;").replace(ap, "&#39;").replace(ic, "&#34;");
          var roomname = data.results[i].roomname.replace(lt, "&lt;").replace(gt, "&gt;").replace(ap, "&#39;").replace(ic, "&#34;");
          data.results[i].roomname = roomname;
          data.results[i].text = text;
          html += MessageView.render(data.results[i]);
        }
      }
    } else {
      // if (!obj['username']) {

      // }
      if (obj['username'] && obj['text'] && obj['roomname']) {
        var lt = /</g,
        gt = />/g,
        ap = /'/g,
        ic = /"/g;
        var username = obj.username.replace(lt, "&lt;").replace(gt, "&gt;").replace(ap, "&#39;").replace(ic, "&#34;");
        obj['username'] = username;
        var text = obj.text.replace(lt, "&lt;").replace(gt, "&gt;").replace(ap, "&#39;").replace(ic, "&#34;");
        obj['text'] = text;
        var roomname = obj.roomname.replace(lt, "&lt;").replace(gt, "&gt;").replace(ap, "&#39;").replace(ic, "&#34;");
        obj['roomname'] = roomname;
        html += MessageView.render(obj);
      }
    }
    $('#chats').append(html);
  }

};