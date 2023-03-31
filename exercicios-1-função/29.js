function intervalo(vetor){
    let dentro = 0
    for(var i =0; i<vetor.length; i++){
        if(vetor[i] >=10 && vetor[i]<=20){
            dentro++
        }

    }
    console.log(`${dentro} estão dentro do intervalo`)

}
vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]
intervalo(vetor)