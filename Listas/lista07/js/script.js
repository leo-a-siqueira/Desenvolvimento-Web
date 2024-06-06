var bancoDeDados = [
    {
        nome: "Toyota Etios 1.3 16v X 5p",
        imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_808329-MLB74873771100_032024-F.webp",
        descricacao: "2014 | 140.000 km",
        preco: "35.500"
    },
    {
        nome: "Nissan March SL 1.6 16V 5p",
        imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_896658-MLB74995219206_032024-F.webp",
        descricacao: "2015 | 145.264 km",
        preco: "33.900"
    },
    {
        nome: "Ford Fiesta 1.6 16v 5p",
        imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_891667-MLB76817728653_062024-F.webp",
        descricacao: "2018 | 75.000 km",
        preco: "55.990"
    },    
    {
        nome: "JAC J3 1.4 16v 5p",
        imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_799582-MLB76839062345_062024-F.webp",
        descricacao: "2011 | 28.000 km",
        preco: "24.990"
    }
]

var conteudoPrincipal = document.getElementById('conteudo-principal')

for (var produto of bancoDeDados) {
    var conteudoProduto = document.createElement('div')
    conteudoProduto.className = "produto"

    var imagem = document.createElement('img')
    imagem.src = produto.imagem
    conteudoProduto.appendChild(imagem)

    var nome = document.createElement('h2')
    nome.textContent = produto.nome
    conteudoProduto.appendChild(nome)

    var descricacao = document.createElement('p')
    descricacao.textContent = produto.descricacao
    conteudoProduto.appendChild(descricacao)

    var preco = document.createElement('p')
    preco.textContent = `R$ ${produto.preco}`
    conteudoProduto.appendChild(preco)

    var botoes = document.createElement('div')
    botoes.className = "botoes"

    var botaoComprar = document.createElement('button')
    botaoComprar.textContent = "Comprar"
    botaoComprar.className = "btn"
    botoes.appendChild(botaoComprar)

    var botaoDetalhes = document.createElement('button')
    botaoDetalhes.textContent = "Detalhes"
    botaoDetalhes.className ="btn"
    botoes.appendChild(botaoDetalhes)

    conteudoProduto.appendChild(botoes)
    conteudoPrincipal.appendChild(conteudoProduto)
    
}