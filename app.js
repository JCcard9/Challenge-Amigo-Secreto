let amigos = [];

function adicionarAmigo() {
    const nome = document.getElementById('nomeAmigo');

    if (nome.value === "") {
        alert("Por favor, insira um nome válido."); 
        return;
    }

    amigos.push(nome.value); // Atualiza o array de amigos
    nome.value = ""; // Limpa o campo de entrada
}




