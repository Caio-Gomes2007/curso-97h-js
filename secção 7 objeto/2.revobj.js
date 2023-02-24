//coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'generica'
produto.preco= 220

console.log(produto)
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo:'A4',
    valor:8900,
    proprietario:{
        nome:"caio",
        idade: 16,
        enndereço:{
            logradouro:'rua ABC',
            numero:123
        }
    },
    condutores:[{
        nome:'junior',
        idade: 19
    },{
        nome:"ana",
        idade:42
    },{
        nome:'vitor',
        idade:150
    }
]
    //poderia aki ter uma função
}

console.log(carro.condutores.length)//quantos condutores tem
console.log(carro,"foi")//misturar string com objeto sem transformar objeto em string