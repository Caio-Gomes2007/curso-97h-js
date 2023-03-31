vetorInteiro = [1,2,3]
vetorString = ['caio','kaio','kayo']
vetorDouble = [1.3,5.6,4.6]


function lervetores(...args){
        resultado = []
        for(var i = 0 ; i < arguments.length;i++){
            resultado = resultado.concat(arguments[i])
        }
        return resultado

}

console.log(lervetores(vetorInteiro, vetorDouble))
console.log(lervetores(vetorDouble, vetorString))