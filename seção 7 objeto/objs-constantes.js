//pessoa -> 123 -> {...}
const pessoa = {nome:'joao'}
console.log(pessoa)

//object frezze

Object.freeze(pessoa)

pessoa.nome='maria'
console.log(pessoa)

//ele nao da como erro , ele so nao atribui ela ,m o objeto ta congelado e imutavel  