function CompraCarro(carro){
    switch(carro){
        case 'hatch':
            console.log('compra efetuada com sucesso')
        break;
        case 'sedan':
        case 'moto':
        case 'caminhonete':
            console.log('Tem certeza que não prefere este modelo?')
        break;
        default:
            console.log('Não trabalhamos com este tipo de automovel aqui')
            break;
    }
}

CompraCarro('hatch')
CompraCarro('sedan')
CompraCarro('moto')
CompraCarro('caminhonete')
CompraCarro('sei la')