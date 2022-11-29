// par nome valor
const saudacao = 'opa' // contexto  léxico 1 , oq e contexo lexico? , 
                      //e o local onde a sua variavel foi definida, nesse caso foi definida nesse arquiv

function exec(){
    const saudacao = 'falaaa' //cotexto lexico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/ valor 
const cliente = {
    nome: ' pedro',
    idade: 32,
    peso:90,
    endereço: {
        logradouro:'rua muito legal',
        numero : 123
    }
}
console.log(saudacao)
console.log(exec())