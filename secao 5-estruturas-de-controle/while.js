function getIntAleatoriamente(min,max){
    const valor = Math.random()*( max - min )+min
    return Math.floor(valor)
}
let opcao = 0
while(opcao != 0){
    opcao = getIntAleatoriamente(-1,10)
    console.log('oção escolhida foi '+opcao)
}
console.log('ate a proxima')
//WHILE(expressao)
//      instrução

var count = 10
while(count < 10){
    console.log(count)
    count++
}