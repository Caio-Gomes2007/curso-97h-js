//else entra como se a condição do if não for atendida ele vai para o else
const imprimirResultado = function(nota ){
    if(nota >= 7){
        console.log('aprovado!')
    }else{
        console.log('Reprovado')
    }
}
imprimirResultado(10)