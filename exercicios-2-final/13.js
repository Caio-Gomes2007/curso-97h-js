function filtrarNumeros(vetor){
    const resultado = []
    for(let item of vetor){
        if(typeof item ==='number'){
            resultado.push(item)
        }
    }
    console.log(resultado)
}

filtrarNumeros(['js',3,5])
   