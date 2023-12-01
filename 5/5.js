document.addEventListener('DOMContentLoaded', function() {
    const userIdInput = document.querySelector('#userIdInput');
    const getTasksButton = document.querySelector('#getTasksButton');
    const taskList = document.querySelector('#taskList');

    getTasksButton.addEventListener('click', function() {
      const userId = userIdInput.value;

      fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Ошибка сети');
          }
        })
        .then(data => {
          taskList.innerHTML = '';

          if (data.length > 0) {
            data.forEach(task => {
              const listItem = document.createElement('li');
              const taskTitle = document.createElement('span');

              taskTitle.textContent = task.title;

              if (task.completed) {
                taskTitle.style.textDecoration = 'line-through';
              }

              listItem.appendChild(taskTitle);
              taskList.appendChild(listItem);
            });
          } else {
            const listItem = document.createElement('li');
            listItem.textContent = 'Пользователь с указанным id не найден';
            taskList.appendChild(listItem);
          }
        })
        .catch(error => {
          console.log('error', error);
        });
    });
  });