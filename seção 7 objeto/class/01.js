class Lancamento{
    constructor(nome = 'generico',valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes,ano){
        this.mes = mes
        this.ano = ano
        this.lancamento = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l =>this.lancamentos.push(l))
    }
    sumario(){
        let valorConsolidado = 0 
        this.lancamento.forEach(l =>{
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}
const salario = new lancamentos('Salario',45000)
const ContaDeLuz = new lancamentos('luz',-220)

const contas = new CicloFinanceiro(6,2018)
contas.addLancamentos(salario,ContaDeLuz)
console.log(contas.sumario())

//deu errado nao sei porque 