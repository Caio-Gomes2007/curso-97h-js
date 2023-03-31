const produtos = [
    {nome:'notebook', preco:2499,fragil:true},
    {nome:'ipad Pro', preco:4199,fragil:true},
    {nome:'copo de vidro', preco:12.49,fragil:true},
    {nome:'copo de plastico', preco:18.99,fragil:false}
]
console.log(produtos.filter(function(p){
    return p.fragil == true , p.preco > 500
    
}))

const caro =  produto => produto.preco >= 500
const fragil = produto => produto.fragil 

let resultado = produtos.filter(caro).filter(fragil)
console.log(resultado)