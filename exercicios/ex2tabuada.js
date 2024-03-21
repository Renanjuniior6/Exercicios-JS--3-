// [ ] Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.

const tabuada = My => {

    let result

    if (My >= 1 && My <= 10) {

        for (let i = 1; i <= 10; i++) {
            console.log(`${i} x ${My} = ${i * My}`)
        }


    }
    else {
        console.log('error')
    }



    return result
}

tabuada(5)

