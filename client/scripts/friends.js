var Friends = {
  toggleStatus: function (){
    $(document).on('click','.username', function(event){
      console.log(event);
      if (!MessageView.friends.includes(event.currentTarget.textContent)) {
        MessageView.friends.push(event.currentTarget.textContent)
      }
      for (var i = 0; i < $('.username').length; i++) {
        if ($('.username')[i].textContent === event.currentTarget.textContent) {
          $('.username')[i].style.fontSize = '20px';
          $('.username')[i].style.color = 'pink';
        }
      }
    })
  }

};