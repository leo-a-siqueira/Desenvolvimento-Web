// Arrays/Listas/Vetores
// Arrays se assemelha com banco de dados
// Um array deve ser capaz de: Adicionar, Remover, Buscar/Listar Atualizar

var nome = 'Fulano' // variavel simples
var nomes = ['Leo', 'Lexia', 'Siqueiras'] // variavel composta (Array)

console.log(nomes)
console.log(nomes[0]) // Acessa a posição 0 - Leo
console.log(nomes[1]) // Acessa a posição 1 - Lexia
console.log(nomes[2]) // Acessa a posição 2 - Siqueiras

console.log(nomes)

nomes.push('Manezão') // Adiconar elemento no array

console.log(nomes.length) // exibe o tamanho do array

nomes.pop() // Por padrão remove a última posição do array
console.log(nomes)

nomes.reverse() // Inverte o array
console.log(nomes)

nomes.shift() // Remove a primeira posição do array
console.log(nomes)

nomes.sort() // Ordena por ordem alfabética
console.log(nomes)

var posicao = nomes.indexOf('Lexia') // Busca por indice o elemento 
nomes.splice(posicao, 1) // Primeiro parametro é a posição do item a ser excluído
console.log(nomes)

nomes.forEach(nomes => {
    
});