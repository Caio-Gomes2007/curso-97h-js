function total(...number){
    let total = 0
    number.forEach(n =>total += n)
    return total
}
console.log(total(2,3,4,5))
//ex 2
const funcionario = {nome:'maria',salario:12348.99}
const clone = {ativo:true,...funcionario}
console.log(clone)