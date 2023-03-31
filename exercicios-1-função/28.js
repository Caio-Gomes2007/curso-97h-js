function lervertor(vetor){
    let pares = 0
    let impares = 0 

    for(var i=0; i<vetor.length; i++){
        if(vetor[i]%2==0){
            pares++
        }else{
            impares++
        }
    }
    console.log(`A quantidade de pares é: ${pares} e de impares é: ${impares}`)
}
vetor = [1,2,3,4]
lervertor(vetor)