function calcularNota(codaluno,nota1,nota2,nota3){
        let notas = []
        notas.push(nota1)
        notas.push(nota2)
        notas.push(nota3)
        
        let mediaFinal = (notas[0]*4+notas[1]*3+notas[2]*3)/10

        console.log(`O Aluno:${codaluno}. Notas:${nota1},${nota2},${nota3}. Situção:${mediaFinal > 5 ? 'aprovado':'reprovado'}`)
}

calcularNota(123,5,1,1)