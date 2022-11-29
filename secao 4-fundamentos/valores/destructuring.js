//ex 01
const pessoa = {
    nome:'ana',
    idade:5,
    endereço:{
        logradouro: 'Rua ABC',
        numero:1000
    }
}
const{nome,idade} = pessoa //tire nome e idade do objeto pessoa
console.log(nome,idade)

const{nome: n , idade : i} = pessoa//'dando nomes' para as variaveis , como forma mais facil de chamalas 
console.log(n,i)

const{sobrenome ,  bermHumorada = true} = pessoa
console.log(sobrenome,bermHumorada) //como não existe dá como undefined

const {endereço:{logradouro,numero,cep}} = pessoa
console.log(logradouro,numero,cep)

//const{conta:{ag,num}} = pessoa
 //console.log(ag,num) //acessando algo que nao e object vai dar erro

 //ex02

 const[a] = [10]
 console.log(a)

 const [n1,n3,n5,n6 = 0 ]= [10,7,9,8] //são atribuidos por ordem
 console.log(n1,n3,n5,n6)

 const [,[nota]]=[[,8,8] , [9,6,8]]
console.log(nota)

//ex03

function rand({min = 0 , max = 100}){
    const valor = Math.random() * (max - min )+min
    return Math.floor(valor)
}
const obj = {max:50 , min:40}
console.log(rand(obj))//gerando valores randomicos 
console.log(rand({min:955 }))//gerando entre o minimo e o , maximo
console.log(rand({}))

//ex04
function rand2([min = 0 , max = 1000]){
    if(min > max) [ min, max] = [max , min]
    const valor = Math.random()* (max -min)+min 
    return Math.floor(valor)
}
console.log(rand2([50,40]))
console.log(rand2([992]))
console.log(rand2([,10]))
console.log(rand2([]))//vai usar valores padrao
 // console.log(rand()) vai dar erro
