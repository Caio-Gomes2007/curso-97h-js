// uma função agrupa varias linhas de codigo, um bloco de codigo nomeado, para facilitar a  utilização das mesmas

//Ex
//função sem retorno
function imprimirSoma(a , b){/*essa parte com () e onde se coloca os parametros */
    console.log(a+b)        /*no caso em questão variaveis , sem especificar , pode ser var , let ou const*/
}
imprimirSoma(2,3)
imprimirSoma(2)//quando e dado so um valor , ele da como NaN(not a number)e impossivel somar um numero sem outro numero 
imprimirSoma(2,3,4,5,6,7,8)//ele so soma os primeiros , ignora os outros , mas não reclama
imprimirSoma()//por não ter nenhum valor , não tem como somar o valor 

//função com retorno
function soma(a,b = 0){
    return a+b          //como aki ele so retorna e não coloca como console.log , e necessário utilizar o console abaixo
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma(1))

//armazenando uma dunção em uma variavel

const imprimirSoma2 = function(a,b){
    console.log(a+b)
}
imprimirSoma2(2,3)

//Armazenando uma função 'arrow' em uma variavel

const soma2 = (a, b) => { 
    console.log(2,3)
}
soma2

//retorno implicito , utilizando o recurso return sem nem colocar a palavra return

const subtracao = (a,b) => a-b 
console.log(subtracao(2,3))

const imprimir2 = a => console.log(a)
imprimir2('legal!!!')