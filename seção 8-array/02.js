const pilotos = ['vettel','alonso','raikkonen','massa']
pilotos.pop()//massa quebrou o carro, remove o ultimo elemento da array
console.log(pilotos)

pilotos.push('vertappen')//adiciona ao ultimo elemento 
console.log(pilotos)

pilotos.shift()//remove o primeiro
console.log(pilotos)

pilotos.unshift('hamilton')//adiciona ao primeiro//aocontrario do shift
console.log(pilotos)

//splice pode adicionar e remover elementos

//adcicionar
pilotos.splice(2,0,'bottas','massa')
console.log(pilotos)

//removen
pilotos.splice(3,1/*1-remove so um elementos em vez de todos que vem depois do indece 3*/) //removendo o indice 3
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)//novo array //slice pega uma parte do array
console.log(algunsPilotos1)//pegou todos os elementos apartir do indice 2 , contando com o indice 2

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)