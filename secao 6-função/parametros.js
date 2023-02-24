 function area(largura,altura){
         const area = largura * altura
         if(area > 20){
             console.log('valor acima do permitido '+area+'m2')
         }else{
//             return area
         }

 }
 console.log(area(2,2))
 //.log(area(2))2 * undefined =  undefined     vai dar errado 

//parametros variaveis

function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}
console.log(soma())//da o valor padrao
console.log(soma(1))

