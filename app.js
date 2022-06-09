//selecionando os itens
let addTarefa = document.querySelector('.adicionaTarefa');
let btnTarefa = document.querySelector('.btn-add-tarefa');
let tarefas = document.querySelector('.tarefas');

function criaLi() { //essa função so cria um li
    const li = document.createElement('li'); //esse li so so pertence ao escopo dessa função
    return li;
}

addTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!addTarefa.value) return;
        criaTarefa(addTarefa.value);
    }
});

function criaTarefa(textoInput) {
    const li = criaLi(); //este li so pertence ao escopo dessa função
    li.innerHTML = textoInput;
    tarefas.appendChild(li); //adiciona o li dentro da class='tarefas'

}

//primeiro capturar o evento de click, se fosse um formulário seria mais facil.
btnTarefa.addEventListener('click', function(e) {
    if (!addTarefa.value) return; //se o campo estiver vazio nao retorna nada.
    criaTarefa(addTarefa.value) //quando clica no botao, pega o texto ue está no inpuit da tarefa e joga para a função criarTarefa
})


