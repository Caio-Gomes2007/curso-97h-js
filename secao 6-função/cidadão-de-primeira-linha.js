// função em Js , first-class-object , função pode ser tratada como um dado
//Uma função pode ter outra função dentro dela

//criar de forma literal
function fun1(){}

//armazenar em uma variavel
const fun2 = function(){}

//armazenar em um array
const array = [function(a,b){return a +b}, fun1 , fun2 ]
console.log(array[0](2,3))

//armazenar em um objeto
const obj = {}
obj.falar = function (){return ' opa'}
console.log(obj.falar())

//passsar funciton como parametro
function run(fun){
    fun()
}
run(function (){
    console.log('executando...')
})

//function pode retornar / conter uma função
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(4)