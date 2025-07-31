const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
      }
    });

    function addTask(text) {
      const li = document.createElement('li');
      li.className = 'list-group-item d-flex justify-content-between align-items-center';

      const span = document.createElement('span');
      span.textContent = text;

      const btnGroup = document.createElement('div');

      const completeBtn = document.createElement('button');
      completeBtn.className = 'btn btn-sm btn-success me-2';
      completeBtn.textContent = '✔';
      completeBtn.onclick = () => {
        span.classList.toggle('completed');
      };

      const editBtn = document.createElement('button');
      editBtn.className = 'btn btn-sm btn-warning me-2';
      editBtn.textContent = 'Edit';
      editBtn.onclick = () => {
        const newText = prompt('Edit your task:', span.textContent);
        if (newText !== null && newText.trim() !== '') {
          span.textContent = newText.trim();
        }
      };

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'btn btn-sm btn-danger';
      deleteBtn.textContent = 'Delete';
      deleteBtn.onclick = () => {
        li.remove();
      };

      btnGroup.appendChild(completeBtn);
      btnGroup.appendChild(editBtn);
      btnGroup.appendChild(deleteBtn);

      li.appendChild(span);
      li.appendChild(btnGroup);
      taskList.appendChild(li);
    }