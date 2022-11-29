const valores = [7.7,8.9,6.3,9.2] //exemplo de array, são varios elemntos que são divididos por virgula
console.log(valores[0],valores[3])//com o colchetes pode se pegar o valor que vc quer , dentro da array,exemplo o valor 0 representa o 7.7
console.log(valores[4])//por não existir o elemento 4 ele da como undefined(indefinido)

valores[10] = 10 //adicionando valores na array, na ordem que você quer e qual você quer, 
console.log(valores)//por nao ter 6 elementos ate o 10 ele diz que falta elemento
valores[4] = 6.6 
console.log(valores)

console.log('Quando elemntos tem na arry?')
console.log(valores.length)//diz quantos elemtentos temos na array

//adicionando de forma certa os elementos na array
valores.push({id:3} ,false ,null ,'teste' )
console.log(valores)

//Boas praticas não misturar tipos de valores , e sim criar arrays para cada tipo de valor diferente//

console.log(valores.pop()) // essa função 'pop' tira o ultimo valor 
delete valores[0]//deletando um valor
console.log(valores)

console.log(typeof valores)// tipo objeto
//obs: '[]' representa uma array