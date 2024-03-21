//[ ] Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior



const Bigger = (Firstnumber, Secondnumber) => {

    if (Firstnumber > Secondnumber) {
        console.log('o primeiro é maior')
    }
    else if (Firstnumber<Secondnumber) {
        console.log('o segundo é maior')
    }

}

Bigger(12,10)