const cardContainer = document.querySelector(".card-container");
const campoBusca = document.querySelector("input");

// ============================================
// Variáveis de estado
// ============================================
let dados = [];
let dadosCarregados = false;

// ============================================
// Funções auxiliares
// ============================================
async function carregarDados() {
    try {
        const resposta = await fetch("data.json");
        if (!resposta.ok) throw new Error(`Erro HTTP: ${resposta.status}`);
        return await resposta.json();
    } catch (error) {
        console.error("Falha ao carregar dados:", error);
        mostrarMensagemErro("Não foi possível carregar os dados. Tente novamente.");
        throw error;
    }
}

function filtrarDados(dados, termoBusca) {
    if (!termoBusca.trim()) return dados;
    const termo = termoBusca.toLowerCase();
    return dados.filter(dado =>
        dado.nome.toLowerCase().includes(termo) ||
        dado.descricao.toLowerCase().includes(termo)
    );
}

function criarCard(dado) {
    const article = document.createElement("article");
    article.classList.add("card");
    article.innerHTML = `
        <h2>${escaparHTML(dado.nome)}</h2>
        <p class="data">Tipo: ${escaparHTML(dado.tipo)}</p>
        <p class="data">País de origem: ${escaparHTML(dado.pais_de_origem)}</p>
        <p class="descricao">${escaparHTML(dado.descricao)}</p>
    `;
    return article;
}

function renderizarCards(dados) {
    cardContainer.innerHTML = "";
    if (dados.length === 0) {
        cardContainer.innerHTML = '<p class="mensagem-vazia">Nenhum resultado encontrado</p>';
        return;
    }
    dados.forEach(dado => cardContainer.appendChild(criarCard(dado)));
}

function escaparHTML(texto) {
    const div = document.createElement("div");
    div.textContent = texto;
    return div.innerHTML;
}

function mostrarMensagemErro(mensagem) {
    const erro = document.createElement("div");
    erro.className = "mensagem-erro";
    erro.textContent = mensagem;
    cardContainer.parentElement.insertBefore(erro, cardContainer);
    setTimeout(() => erro.remove(), 5000);
}

// ============================================
// Função para criar card do input
// ============================================
function adicionarCardDoInput() {
    const texto = campoBusca.value.trim();
    if (!texto) return;

    const dado = {
        nome: texto,
        tipo: "Personalizado",
        pais_de_origem: "N/A",
        descricao: "Este card foi criado a partir do que você escreveu."
    };

    // Adiciona o card sem limpar o restante
    const card = criarCard(dado);
    cardContainer.appendChild(card);

    // Limpa apenas se quiser
    campoBusca.value = "";
}

// ============================================
// Funções principais
// ============================================
async function iniciarBusca() {
    try {
        if (!dadosCarregados) {
            dados = await carregarDados();
            dadosCarregados = true;
        }
        const termoBusca = campoBusca.value;
        const dadosFiltrados = filtrarDados(dados, termoBusca);
        renderizarCards(dadosFiltrados);
    } catch (error) {
        console.error("Erro ao buscar:", error);
    }
}

// ============================================
// Event listeners
// ============================================
document.getElementById("botao-busca")?.addEventListener("click", iniciarBusca);
campoBusca?.addEventListener("input", iniciarBusca);
document.getElementById("botao-escrever")?.addEventListener("click", adicionarCardDoInput);
window.addEventListener("load", iniciarBusca);


