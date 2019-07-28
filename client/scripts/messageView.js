var MessageView = {
  friends: [],
  render: _.template(
      "<div class='chat'>" +
        "<u class='username' onmouseover='' style='cursor: pointer;'>" +
          "<%= username%>" +
        "</u>" +
        "<div class='roomname' onmouseover='' style='cursor: pointer;'>" +
          "Room: <%= roomname%>" +
        "</div>" +
        "<p class='text'>" +
          "<%= text%>" +
        "</p>" +
      "</div>"
    )

};