function lervertor(vetor){
    let negativos = 0 

    for(var i=0; i<vetor.length; i++){
        if(vetor[i]<0){
            negativos++
        }
    }
    console.log(`A quantidade de numeros negativos é ${negativos}`)
}
vetor = [-1,2,3,4]
lervertor(vetor)
