function frutas(fruta){
    switch(fruta){
        case 'Maçã':
            console.log('Não vendemos esta fruta aqui')
        break;
        case 'kiwi':
            console.log('Estamos escassez de kiwis')
        break;
        case 'Melancia':
            console.log('Aqui está, são 3 reais o quilo')
        break;
        default:
            console.log('Erro')
        break;
    }
}

frutas('Maçã')
frutas('kiwi')
frutas('Melancia')