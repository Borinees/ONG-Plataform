'use strict';

const detalhes = document.getElementById('detalhes');
const inputPesquisa = document.getElementById('pesquisar');

//Pega os dados do localstorage
const dadosSalvos = localStorage.getItem('listaNecessidade');
const listaNecessidade = JSON.parse(dadosSalvos) || [];

//Função para renderizar
function renderizarLista(lista){

    //Limpa o conteudo
    detalhes.innerHTML = '';    

    if(lista.length > 0) {
        lista.forEach((dados) => {
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
}

//Primeira exibição
renderizarLista(listaNecessidade);

//Função para filtrar
inputPesquisa.addEventListener('input', () => {
    const termo = inputPesquisa.value.toLowerCase();

    const listaFiltrada = listaNecessidade.filter((item) =>
        Object.values(item).some(valor =>
            String(valor).toLowerCase().includes(termo)
        )
    );

    renderizarLista(listaFiltrada);
});