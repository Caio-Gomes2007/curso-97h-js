function MeuObjeto(){
    console.log(MeuObjeto.prototype)
}

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__) //=> true: se o prototipo do obj1 e igual a obj2 por serem criados pela 
//msm função construtora
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'anonimo'
MeuObjeto.prototype.falar = function(){
    console.log(`bom dia: meu nome é ${this.nome}`)
}
obj1.falar()
obj2.nome = 'rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__=MeuObjeto.prototype
obj3.nome ='Obj3'
obj3.falar()

//resumindo
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype) //coloca semore F maiusculo porque minusculo deu errado
console.log(Function.prototype.__proto__===Object.prototype)
