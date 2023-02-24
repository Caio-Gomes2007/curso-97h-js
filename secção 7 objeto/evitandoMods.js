//Object.preventExtensions
const produto = Object.preventExtensions({
    nome:'qualquer',
    preco:1.99,
    tag:'promoção'
})
console.log('Extensivel',Object.isExtensible(produto))

produto.nome = 'borracha'
produto.descricao = 'Borracha escolar branca'  // nao pode adicionar nada
delete produto.tag  //mas pode deletar
console.log(produto)

//object.seal
const pessoa = { 
    nome:'juliana',
    idade:35
}
Object.seal(pessoa)
console.log('Selado:' ,Object.isSealed(pessoa))
//basicamente permite que vc so  faça alteração , nada de eletar ou adicionar , apenas modificar
pessoa.sobrenome = 'silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//object.frezee = selado +valores constantes , ja aprendemos 