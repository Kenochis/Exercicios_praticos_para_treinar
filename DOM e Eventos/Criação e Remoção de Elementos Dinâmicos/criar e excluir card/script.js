const btnAdd = document.getElementById('addCard');
const container = document.getElementById('container');

// Excluir qualquer card (padrão ou criado)
container.addEventListener("click", (event) => {
    if (event.target.classList.contains("excluir")) {
        event.target.closest(".card").remove();
    }
});

// Criar novo card
btnAdd.addEventListener("click", () => {
    const novoCard = document.createElement("div");
    novoCard.classList.add("card");

    novoCard.innerHTML = `
        <div class="conteudo">
            <h3>Card novo</h3>
            <p>Conteúdo do novo card...</p>
        </div>
        <button class="excluir">Excluir</button>
    `;

    // Se o container tiver algum card, insere ANTES do primeiro
    if (container.firstChild) {
        container.insertBefore(novoCard, container.firstChild);
    } else {
        container.appendChild(novoCard);
    }
});