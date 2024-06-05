var bancoDeDados = [
    {
        nome: "Bolu de murangu",
        descricacao: "Melhor bolo do mundo",
        preco: 80,
        imagem: "https://via.placeholder.com/200"
    },
    {
        nome: "Bolo de Ninho",
        descricacao: "Bolo top",
        preco: 120,
        imagem: "https://via.placeholder.com/200"
    },
    {
        nome: "Bolo de Cenoura",
        descricacao: "Melhor bolo de Cenoura.",
        preco: 95,
        imagem: "https://via.placeholder.com/200"
    }
]

var conteudoPrincipal = document.getElementById('conteudo-principal')

for (var produto of bancoDeDados) {
    var conteudoProduto = document.createElement('div')
    conteudoProduto.className = "conteudo-produto"

    var imagem = document.createElement('img')
    imagem.src = produto.imagem
    conteudoProduto.appendChild(imagem)

    var nomeProduto = document.createElement('h2')
    nomeProduto.textContent = produto.nome
    conteudoProduto.appendChild(nomeProduto)

    var descricacaoProduto = document.createElement('p')
    descricacaoProduto.textContent = produto.descricacao
    conteudoProduto.appendChild(descricacaoProduto)

    var precoProduto = document.createElement('p')
    precoProduto.textContent = `R$ ${produto.preco}`
    conteudoProduto.appendChild(precoProduto)

    var botoes = document.createElement('div')
    botoes.className = "btn"

    var botaoComprar = document.createElement("button")
    botaoComprar.textContent = "Comprar"
    botoes.appendChild(botaoComprar)

    var botaoDetalhes = document.createElement("button")
    botaoDetalhes.textContent = "Detalhes"
    botoes.appendChild(botaoDetalhes)

    conteudoProduto.appendChild(botoes)
    conteudoPrincipal.appendChild(conteudoProduto)
}