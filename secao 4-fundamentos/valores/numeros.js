const peso1 = 1.0
const peso2 = Number('2.0')
console.log(peso1,peso2)
console.log(Number.isInteger(peso1))//is.Integer
console.log(Number.isInteger(peso2))//verifica se e Number ou nao , True or False

const avl = 9.871
const avl2 = 6.871

const total = avl*peso1+avl2+peso2
const media = total/(peso1+peso2)
console.log(media.toFixed(2))//determina quantas casas decimais vc quer
console.log(media.toString(2))//transforma o valor em string
console.log(typeof media)//retorna o tipo de variavel que ele é,nesse caso e number

//alguns cuidados com Numeros

console.log(7/0) //por ser uma conta com valor infinito , o javascript retorna que ele e infinito, ou seja o valor dele e impossivel de ser mostrado sem travar a maquina
console.log("10"/2)//ele percebe que msm com aspas é um numero
console.log("show!" * 2) // por ser um texto e não um numero , ele retorna que e NaN(not a number)
console.log(0.1 +0.7)//Nem tudo são cores , ele tem esse problema de especificações


//Math
console.log('Math')

const raio = 5.6
const area = Math.PI * Math.pow(raio,2)
console.log(area)
console.log(typeof Math)