const formulario = document.querySelector('#formulario');
const tarefa = document.querySelector('#tarefa');
const lista_tarefas = document.querySelector('#lista_tarefas');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    if (tarefa.value.trim() === "") {
        alert("Por favor, digite uma tarefa.");
        return;
    }

    const tarefa_container = document.createElement('div');
    tarefa_container.className = 'tarefa-container';

    const nova_tarefa = document.createElement('p');
    nova_tarefa.textContent = tarefa.value;

    const check_box = document.createElement('input');
    check_box.type = 'checkbox';

    const novo_botao = document.createElement('button');
    novo_botao.className = 'excluir';
    novo_botao.textContent = 'Excluir';

    tarefa_container.appendChild(check_box);
    tarefa_container.appendChild(nova_tarefa);
    tarefa_container.appendChild(novo_botao);

    lista_tarefas.appendChild(tarefa_container);

    tarefa.value = "";

    novo_botao.addEventListener('click', () => {
        lista_tarefas.removeChild(tarefa_container);
    });
});
