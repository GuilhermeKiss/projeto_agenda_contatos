const form = document.getElementById('form-agenda');
const nomesContatos = [];
const numerosTelefone = [];
let linhas = '';
let numeroEValido = false;

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroTelefone = document.getElementById('numero-telefone');

    if(numerosTelefone.includes(inputNumeroTelefone.value)) { 
        alert(`ERRO! O número: "${inputNumeroTelefone.value}" já existe na sua agenda de contatos!`);
    } else {
    
    numerosTelefone.push(inputNumeroTelefone.value); 

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    const mensagemSucesso = document.getElementById('contato-adicionado');
    mensagemSucesso.innerHTML = `<b>${inputNomeContato.value}</b> foi adicionado com sucesso com o número <b>${inputNumeroTelefone.value}</b>.`;

    inputNomeContato.value = '';
    inputNumeroTelefone.value = '';

}
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}



