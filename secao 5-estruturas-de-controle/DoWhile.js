function getIntAleatoriamente(min,max){
    const valor = Math.random()*( max - min )+min
    return Math.floor(valor)
}
let opcao = 0
 do { 
    opcao = getIntAleatoriamente(-1,10)
    console.log('oção escolhida foi '+opcao)
}
while(opcao != 0)
console.log('ate a proxima')
