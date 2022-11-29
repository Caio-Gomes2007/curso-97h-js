const escola = 'cod3r'//conta o primeiro como zero

console.log(escola.charAt(5))//pegfa letra conforme a posição dela numerica
console.log(escola.charCodeAt(3))//ELe péga o valor da tabela unicode
console.log(escola.indexOf(3))//o mesmo do charAT

console.log(escola.substring(1))//ele começa apartir do 1
console.log(escola.substring(0,3))//ele so pega do 0 ao 3 , e uma forma de "cortar" itens

console.log('escola '.concat(escola).concat('!'))//concatenar texto com variaveis
console.log('escola '+escola+'!')//forma mais simples de concatenar texto,spring
console.log(escola.replace(3,'e'))//substitui o 3 por algo escolhido 

console.log('ana, maria ,pedro'.split(',')) //transforma springs em arrys

//tmeplate string

const nome = 'caio'
const conc = 'ola ' +nome+ '!'
const tmeplate = ` 
    ola
    ${nome}!` //uma amostra da quebra de linha no terminal
console.log(conc,tmeplate)

//espressões...
console.log(`1+1 = ${1+1}`)//função

const up = texto => texto.toUpperCase()
console.log(`Ei...${up('cuidado')}!`)

