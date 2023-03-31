function calculadora(n1,operação,n2){
        switch (operação) {
            case '+':
                return n1+n2
                break;
            case '-':
                return n1-n2
                break;
            case '*':
                return n1*n2
            break;
            case '/':
                return n1/n2
            break;
            
            default:
                return 'operação inválida'
                break;
        }
}

console.log(calculadora(2,"/",3))