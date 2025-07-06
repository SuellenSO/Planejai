// Função para adicionar nova tarefa
const form = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const taskInput = document.getElementById('task');
  const dateInput = document.getElementById('date');
  const timeInput = document.getElementById('time');

  const description = taskInput.value;
  const date = dateInput.value;
  const time = timeInput.value;

  const newTask = document.createElement('li');
  newTask.innerHTML = `<strong>${description}</strong><br><small>${date} às ${time}</small>`;
  
  newTask.addEventListener('click', function() {
    newTask.classList.toggle('completed');
  });

  taskList.appendChild(newTask);

  taskInput.value = '';
  dateInput.value = '';
  timeInput.value = '';
});
    // Adiciona evento de marcar como concluída
    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });
  
    // Animação fade in
    li.style.opacity = 0;
    document.getElementById('taskList').appendChild(li);
    setTimeout(() => {
      li.style.opacity = 1;
    }, 100);
  
    // Limpa campo
    input.value = "";
  
  
  // Função de validação do formulário de contato
  function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (name === "" || email === "" || message === "") {
      alert("Por favor, preencha todos os campos.");
      return false;
    }
  
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um e-mail válido.");
      return false;
    }
  
    alert("Mensagem enviada com sucesso!");
    return true;
  }
  