function aumento(plano,salario){
        switch (plano) {
            case 'a':
                case 'A':
                    return salario * 1.1
                break;

                case 'b':
                    case 'B':
                        return salario * 1.15
                    break;
                    
                    case 'c':
                        case 'C':
                            return salario * 1.20
                        break;
                        
            default:
                return 'erro'
                break;
        }
}

console.log(aumento('a',1000))
console.log(aumento('b',1000))
console.log(aumento('c',1000))