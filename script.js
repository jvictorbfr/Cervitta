function openModal(bebida) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');

    let nome = '';
    let ingredientes = '';
    let descricao = '';
    let imgSrc = '';

    // Definindo os dados com base na bebida clicada
    if (bebida === 'morango') {
        nome = 'Sabor Morango';
        ingredientes = 'Água, malte de cevada, lúpulo, morango natural e levedura.';
        descricao = 'Uma combinação perfeita entre a doçura natural do morango e o amargor suave da cerveja, resultando em uma bebida refrescante e frutada. Ideal para quem busca uma cerveja mais leve, com um toque adocicado.';
        imgSrc = 'morango.png';
    } else if (bebida === 'maracuja') {
        nome = 'Sabor Maracujá';
        ingredientes = 'Água, malte de cevada, lúpulo, polpa de maracujá e levedura.';
        descricao = 'Uma explosão de sabor cítrico! O maracujá traz um toque ácido e refrescante que equilibra perfeitamente com a leve amargura da cerveja. Uma escolha ideal para quem ama sabores mais vibrantes e tropicais.';
        imgSrc = 'maracuja.png';
    } else if (bebida === 'pitaia') {
        nome = 'Sabor Pitaia';
        ingredientes = 'Água, malte de cevada, lúpulo, polpa de pitaia e levedura.';
        descricao = 'Uma cerveja leve e exótica com o sabor suave e delicado da pitaia. Sua cor vibrante e sabor único fazem dela a escolha perfeita para quem deseja experimentar algo novo e refrescante.';
        imgSrc = 'pitaia.png';
    }

    // Criando o conteúdo do modal dinamicamente
    modalBody.innerHTML = `
        <img src="${imgSrc}" alt="${nome}" style="width: 35%; border-radius: 10px;">
        <h2>${nome}</h2>
        <p><strong>Ingredientes:</strong> ${ingredientes}</p>
        <p><strong>Descrição:</strong> ${descricao}</p>
        <button onclick="comprarBebida('${nome}')" style="margin-top: 10px; padding: 10px 20px; background-color: #3f3f3f; color: white; font-weight: bolder; border: none; border-radius: 5px; cursor: pointer;">Comprar</button>
    `;

    // Exibindo o modal
    modal.style.display = 'block';
}

function comprarBebida(nome) {
    alert(`A bebida de ${nome} será entregue na sua casa.`);
}

function closeModal() {
    // Fechar o modal
    document.getElementById('modal').style.display = 'none';
}
