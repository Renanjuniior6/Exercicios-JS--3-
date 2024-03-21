const calculate = (number1, number2, operation) => {
    let result 

    switch  (operation) {
        case '+':
            result= number1+number2

            break;

            case '-':
            result= number1-number2
            break;

            case '*':
                result= number1*number2
            
            break;

            case '/':
                result= number1/number2
            
            break;
    
        default:
            result= 'error'
            break;
    }

    return result 
    
}






function sum (Mynumber, Yournumber) {
    const result= Mynumber+Yournumber
    return result  
}

function fruta () {
    const result= 'Maça e Pêra'
    return result  
}

const Numeral = (Mynumber, Yournumber) => {
    const soma= Mynumber+Yournumber
    return soma  
}
    const firstnumber= 10
    const secondnumber= 20 
console.log (`E a soma dos dois é ${Numeral(firstnumber,secondnumber)}`)

