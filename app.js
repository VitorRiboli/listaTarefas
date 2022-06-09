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

function limpaInput() {
    addTarefa.value = ''
    addTarefa.focus();
}

function criaTarefa(textoInput) {
    const li = criaLi(); //este li so pertence ao escopo dessa função
    li.innerHTML = textoInput;
    tarefas.appendChild(li); //adiciona o li dentro da class='tarefas'
    limpaInput(); //uando termina de add a tarefa limpa
    criaBotaoApagar(li);
    salvarTarefa(); //função para salvar a tarefa
}

function criaBotaoApagar(li) {
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button'); //criando um botao para apagar as tarefas
    botaoApagar.innerHTML = 'Apagar';
    //botaoApagar.classList.add('apagar'); //poderia adicionar uma classe assim.
    botaoApagar.setAttribute('class', 'apagar') //esse codigo seta um atributo do tipo class = 'apagar'
    li.appendChild(botaoApagar);  //adicionando o botao no li

}

//primeiro capturar o evento de click, se fosse um formulário seria mais facil.
btnTarefa.addEventListener('click', function(e) {
    if (!addTarefa.value) return; //se o campo estiver vazio nao retorna nada.
    criaTarefa(addTarefa.value) //quando clica no botao, pega o texto ue está no inpuit da tarefa e joga para a função criarTarefa
})

document.addEventListener('click', function(e) {
    const el = e.target; 
    if (el.classList.contains('apagar')) { //se esse botao tem a class 'apagar' e ele que eu quero
        el.parentElement.remove(); //remove o pai do botao
    }
});

function salvarTarefa() {
    //pegar os li's dentro das tarefas, selectorALL pq quer todos.
    const liTarefas = tarefas.querySelectorAll('li');
    const listaTarefas = []; //vai receber todas as li
    
    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); //tira o texto apagar, e o trim tira o espaço vazio que fica
        listaTarefas.push(tarefaTexto); //vai jogar os textos dentro da array
    }
}