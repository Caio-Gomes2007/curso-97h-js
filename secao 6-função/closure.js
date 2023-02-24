//Closure é o escopo criado quando uma funçãop é declarada 
//Esse escopop permite a função acessar e manipular variaveis externas á função

//contexto lexico em ação

const x = 'global'

function fora(){
    const x = 'local'
    function dentro(){
        return x 
    }
    return dentro
}

const minhaFun = fora()
console.log(minhaFun())