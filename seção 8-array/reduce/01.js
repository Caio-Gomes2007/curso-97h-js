const alunos = [
    {nome:'joao',nota: 7.3,bolsista:false},
    {nome:'Maria',nota: 9.2,bolsista:true},
    {nome:'Pedro',nota: 9.8,bolsista:false},
    {nome:'Ana',nota: 8.7,bolsista:true}
]
console.log(alunos.map(a=>a.nota))
const resultado = alunos.map(a =>a.nota).reduce(function(Acumulador,atual){
    console.log(Acumulador,atual)
    return Acumulador + atual
})
console.log(resultado)