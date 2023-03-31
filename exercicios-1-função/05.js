function receberDinheiro(x){
    valorEmREais = ('R$'+ x.toFixed(2).toString().replace('.',','))
    console.log(valorEmREais)
}

receberDinheiro(0.30000000000000004)