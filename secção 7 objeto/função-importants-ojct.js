const pessoa = {
    nome:'Rebeca',
    idade:2,
    peso:13
}

console.log(Object.keys(pessoa))//retorna todos as 'chaves' do objeto Ex nome , idade , peso
console.log(Object.values(pessoa))//retorna os valores do objeto Ex "Rebeca", 2, 13
console.log(Object.entries(pessoa))//retorna tanto as 'chaves quanto os elemtentos , Ex "nome , "rebeca ...

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.defineProperty(pessoa,'dataNascimento',{ //definindo caracteristicas da propriedade
    enumerable:true, //passivo a ser listada ? sim
    writable:false, //permite ser modificada ? não   igual a o frezze
    value: '01/01/2007'//valor dela ? '01/01/2007' 

    //por mais que seja mais codigo que o normal ajuda a ter mais copntrole
})

// Object.assign (ECMAScript 2015)
const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3 , a:4}
const obj = Object.assign(dest,o1,o2) //coloca todos os objetos escolhidos  em um unico objeto , nesse caso dest,o1 e 
//o2 //pontuando algo importante se o ultimo objeto tiver uma propriedade com o msm nome da priemira , a primeira sera sobreescrita
//pela ultima

Object.freeze(obj)//imutavel
obj.c=1234
console.log(obj)
