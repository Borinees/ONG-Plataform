'use strict;' //Modo restrito

//API para formulario -> viacep.com.br

//Função para limpar o formulario
const limparFormulario = (endereco) => {
    document.getElementById('cepText'),value = '';
    document.getElementById('ruaText'),value = '';
    document.getElementById('numeroText'),value = '';
    document.getElementById('bairroText'),value = '';
    document.getElementById('cidadeText'),value = '';
    document.getElementById('estadoText'),value = '';
    document.getElementById('contatoText'),value = '';
}

//Função para preencher o formulario
const preencherFormulario = (endereco) => {
    document.getElementById('ruaText').value = endereco.logradouro;
    document.getElementById('bairroText').value = endereco.bairro;
    document.getElementById('cidadeText').value = endereco.localidade;
    document.getElementById('estadoText').value = endereco.estado;
}