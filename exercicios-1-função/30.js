function maior_e_menor(vetor){
    let maior
    let menor
    for(var i = 0; i < vetor.length;i++){
        
        if(maior===undefined && menor===undefined){
            maior = vetor[i]
            menor = vetor[i]
        }else if(maior < vetor[i]){
            maior = vetor[i]
        }else if(menor > vetor[i]){
                menor = vetor[i]
        }
    }
    console.log(maior,menor)
}

vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

maior_e_menor(vetor)