let amigos = [];

function adicionarAmigo() {
    const nome = document.getElementById('nomeAmigo');

    if (nome.value === "") {
        alert("Por favor, insira um nome válido."); 
        return;
    }

    amigos.push(nome.value); // Atualiza o array de amigos
    nome.value = ""; // Limpa o campo de entrada
    exibirAmigos(); // Atualiza a lista exibida
}

function exibirAmigos() {
    const lista = document.getElementById('listaAmigos'); 
    lista.innerHTML = ""; 

    for (const amigo of amigos) {
        const item = document.createElement('li'); // Cria um elemento <li>
        item.textContent = amigo; // Define o texto do <li> como o nome do amigo
        lista.appendChild(item); // Adiciona o <li> à lista
    }
}







