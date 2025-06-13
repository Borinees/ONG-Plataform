'use strict';

const detalhes = document.getElementById('detalhes');

//Pega os dados do localstorage
const dadosSalvos = localStorage.getItem('listaNecessidade');
const listaNecessidade = JSON.parse(dadosSalvos) || [];


if(listaNecessidade.length > 0) {
    listaNecessidade.forEach((dados, index) => {
        const div = document.createElement('div');
        div.classList.add('card');

        div.innerHTML = `
            <p><strong>Instituição:</strong> ${dados.instituicao}</p>
            <p><strong>Tipo de ajuda:</strong> ${dados.tipoAjuda}</p>
            <p><strong>Título:</strong> ${dados.titulo}</p>
            <p><strong>Descrição:</strong> ${dados.descricao}</p>
            <p><strong>CEP:</strong> ${dados.cep}</p>
            <p><strong>Rua:</strong> ${dados.rua}</p>
            <p><strong>Número:</strong> ${dados.numero}</p>
            <p><strong>Bairro:</strong> ${dados.bairro}</p>
            <p><strong>Cidade:</strong> ${dados.cidade}</p>
            <p><strong>Estado:</strong> ${dados.estado}</p>
            <p><strong>Contato:</strong> ${dados.contato}</p>
        `;

        detalhes.appendChild(div);
    });
} else {
    detalhes.innerHTML = "<p>Nenhuma necessidade cadastrada ainda.</p>";
}