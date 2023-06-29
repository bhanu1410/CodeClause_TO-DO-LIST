document.getElementById('add-btn').addEventListener('click', function() {
    var input = document.getElementById('todo-input');
    var task = input.value.trim();
  
    if (task !== '') {
      var newItem = document.createElement('li');
      newItem.innerHTML = task + ' <button class="delete-btn">Delete</button>';
  
      document.getElementById('todo-list').appendChild(newItem);
      input.value = '';
  
      var deleteButtons = document.getElementsByClassName('delete-btn');
      for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', function() {
          this.parentNode.remove();
        });
      }
    }
  });
  