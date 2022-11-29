// True or False
let isAtivo = false
console.log(isAtivo)

 isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)//quastiona se o "1" e verdadeiro ou não,ou seja ,true
console.log(!isAtivo)//questiona o aocontrario do que o "1" é , ou seja ,\false

//verdadeiros 

console.log('os verdadeiros ...')//todos que sempre daram verdadeiros sem nenhum parametro alterado pelo codigo
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

// falsos

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar')
console.log(!!(''|| null || 0 || ' '))//mesmo não tendo paramentro o JavaScript converte para True or False

let nome = '' 
console.log(nome || 'desconhecido') //por não ter nome ele da como desconhecido , tipo if e else so que mais compacto



