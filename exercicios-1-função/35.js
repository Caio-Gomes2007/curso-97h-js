function Adicionar(pilha,adiciona){
    for(var i = 0; i<adiciona.length; i++){
        console.log(adiciona[i])
        pilha.push(adiciona[i])
        
    }
    console.log('vetor adicionado ' + adiciona)
    console.log('vetor resultado '+pilha)
}

let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

Adicionar(vetorPilha, vetorAdiciona)