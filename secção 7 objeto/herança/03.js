const pai = {nome:'pedro',corCabelo:'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai,{
    nome:{value:'bia',writable:false,enumerable:true}
})

console.log(filha2.nome)
filha2.nome = 'carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let keys in filha2){
    filha2.hasOwnProperty(keys)? //forma de descobrir se o atributo e de herança ou do objeto em si
    console.log(keys): console.log(`por herança ${keys}`)
}