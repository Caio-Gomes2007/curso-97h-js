Array.prototype.reduce2 = function(callback , valorInicial){
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = this[0]
    for(let i = indiceInicial; i<this.length;i++){
        acumulador = callback(acumulador,this[i],i,this)
    }
    return acumulador
}

const soma = (total,valor) => total + valor
const nums = [1,2,3,4,5,6]
console.log(nums.reduce2(soma, 21))

//deu errado , era pra dar 42 , mas fodase a gente nao vai criar reduce2 ou map2 na via que se foda
//com o reduce normal vai direitinho
