const fabricantes = ['mercedes','audi','BMW']

function imprimir(nome,indice){
    console.log(`${indice+1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(a){
    console.log(a)
})

//callback é quando vc passa uma função que e utilizada quando um evento acontecer

const notas = [7.7 , 6.5 , 5.2 , 8.9 , 3.6 , 7.1 , 9.0]

//sem callback
let notasBaixas = []
for (let i in notas){
    if (notas [i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

//usando o callback

notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})
console.log(notasBaixas2)

const notasBaixas3 = notas.filter (nota => nota < 7)
console.log(notasBaixas3)