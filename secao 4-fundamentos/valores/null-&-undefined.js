const a = {name: 'teste'}
console.log(a)

const b = a
console.log(b)

b.name = 'Opa'
console.log(a)
let c = 3
console.log('valor de c '+c)
let d = c
console.log('valor de d ' + d)
d++
console.log('mudando o valor de d ' +c) //aqui não e atribuido o valor de d 

let valor // não inicializada
console.log(valor)//valor padrão undefined

valor = null
console.log(valor)//ausencia de valor , valor definido ,vazio , porem definido
//console.log(valor.toString())//vai dar error porra!

const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 3.50 
console.log(produto)

produto.preco = undefined //evite atribur undefined , sempre deixe a linguagem dizer se e ou nao undefined
console.log(!!produto.preco)
//delete produto.preco  //matando um elemento 
//console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)
