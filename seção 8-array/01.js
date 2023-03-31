//bomba , array é um objeto
console.log(typeof Array,typeof new Array,typeof [])

let aprovados = new Array('bia','carlos','ana')
console.log(aprovados)

aprovados = ['bia','carlos','ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])//não existe esse elemento 3 , entao da como undefined

//adicionando elementos ao array
aprovados[3] ='paulo' //forma que substitui um indice , nesse caso o indice indefinido 3
//
aprovados.push('abia')//forma mais usual que nao substitui , apenas adiciciona ao array
console.log(aprovados.length)//quantos indeces tem

aprovados[9] = 'rafael'//substituindo o indce 9 , mas como os outros nao existem eles ficam como undefined
console.log(aprovados.length)//=>10
console.log(aprovados[8]===undefined)//=>true

console.log(aprovados)//<4 empty items>,4 itens vazios/undefineds
aprovados.sort() //organiza , de forma alfabetica
console.log(aprovados)

delete aprovados[1] //deltetando o indice 1
console.log(aprovados[1])//retorna undefined , pois o espaço do indice um ainda existe 
console.log(aprovados[2])//os indices continuam na msm posição msm se o da frente for deletado

aprovados = ['bia','carlos','ana']
aprovados.splice(1,2) //remove , adiciona  e remove e adiciona ao msm tempo
aprovados.splice(1,2 ,' elemento 1' , 'elemento 2') //adicionado e removendo ao msm tempo

console.log(aprovados)
