const aprovados = ['agatha','aldo','daniel','raquel']

aprovados.forEach(function(nome,indice){
    console.log(`${indice +1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))//function arrow

const exibirArpovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirArpovados)


aprovados.forEach(function(nome,indice,array){//so pode ate 3 parametros
    console.log(`${indice +1}) ${nome}`)
    console.log(array)
})