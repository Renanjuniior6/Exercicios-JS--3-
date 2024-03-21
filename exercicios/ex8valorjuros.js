/*[ ] Escreva um programa onde, você cria uma função geradora de desconto.
A função aceita 4 parâmetros (Nome do cliente, valor total da compra, um booleano que diz se é a primeira compra do cliente ou não, um booleando que diz se o cliente vai pagar a vista ou não)
Os descontos funcionam da seguinte forma:

1-Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto

2-Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 25% de desconto

3-Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20%

4-Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto 

5-Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto

6-Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de 10%

7-Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto

8-Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto

9-Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 10%

10-Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 10% de desconto

11-Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 5% de desconto

-Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => SEM DESCONTO- A função deve imprimir na tela:

Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, o valor total com desconto e a porcentagem de desconto que ele recebeu.

Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, o valor total da sua compra e um cupom de desconto. Esse cupom deve ser um valor aleatório entre 10 e 20% para a próxima compra.*/



function Discount (cliente,total,booleano1orN,booleanoVorN) {

    const cash = booleanoVorN === "vista" ? true : false
    const first = booleano1orN === "1 vez" ? true : false 

 let result

if (first===true && cash===true && total>1000) {
    let r1 = total - total * (30/100) 
    console.log(`${cliente}, Obrigado pelas compras!`, `no valor de:`,`R$${total},` , `seu valor com desconto:` , `${r1}` , 'com 30% de desconto' )
}


if (first===true && cash===true && (total<1000&&total>500)) {
    let r2 = total - total * (25/100)
    console.log(`${cliente}, Obrigado pelas compras!`, `no valor de:`,`R$${total},` , `seu valor com desconto:` , `${r2}` , 'com 25% de desconto' )
}


if (first===true && cash===true && total<500) {
    let r3 =  total - total * (20/100) 
    console.log(`${cliente}, Obrigado pelas compras!`, `no valor de:`,`R$${total},` , `seu valor com desconto:` , `${r3}` , 'com 20% de desconto' )
}

if (first===true && cash===false && total>1000) {
    let r4 =  total - total * (20/100)
    console.log(`${cliente}, Obrigado pelas compras!`, `no valor de:`,`R$${total},` , `seu valor com desconto:` , `${r4}` , 'com 20% de desconto' )
}


if (first===true && cash===false && (total<1000&&total>500)) {
    let r5 =  total - total * (15/100)
    console.log(`${cliente}, Obrigado pelas compras!`, `no valor de:`,`R$${total},` , `seu valor com desconto:` , `${r5}` , 'com 15% de desconto' )
}


if (first===true && cash===false && total<500){ 
    let r6 =  total - total * (10/100)
    console.log(`${cliente}, Obrigado pelas compras!`, `no valor de:`,`R$${total},` , `seu valor com desconto:` , `${r6}` , 'com 10% de desconto' )
}


if (first===false && cash===true && total>1000) {
    let r7 =  total - total * (20/100)
    console.log(`${cliente}, Obrigado pelas compras!`, `no valor de:`,`R$${total},` , `seu valor com desconto:` , `${r7}` , 'com 20% de desconto' )
}


if (first===false && cash===true && (total<1000&&total>500)) {
    let r8 =  total - total * (15/100)
    console.log(`${cliente}, Obrigado pelas compras!`, `no valor de:`,`R$${total},` , `seu valor com desconto:` , `${r8}` , 'com 15% de desconto' )
}


if (first===false && cash===true && total<500) {
    let r9 =  total - total * (10/100)
    console.log(`${cliente}, Obrigado pelas compras!`, `no valor de:`,`R$${total},` , `seu valor com desconto:` , `${r9}` , 'com 10% de desconto' )
}


if (first===false && cash===false && total>1000) {
    let r10 =  total - total * (10/100)
    console.log(`${cliente}, Obrigado pelas compras!`, `no valor de:`,`R$${total},` , `seu valor com desconto:` , `${r10}` , 'com 10% de desconto' )
}


if (first===false && cash===false && (total<1000&&total>500)) { 
    let r11 =  total - total * (5/100)
    console.log(`${cliente}, Obrigado pelas compras!`, `no valor de:`,`R$${total},` , `seu valor com desconto:` , `${r11}` , 'com 5% de desconto' )
}


if (first===false && cash===false && total<500) {
    let Random = Math.floor(Math.random() * (20 - 10 + 1)) + 10
    console.log(`${cliente}, Obrigado pelas compras!` , `valor da compra: R$${total},` , `cupom de desconto: ${Random}% para sua próxima compra`)
}

return result


}

console.log(Discount("Renan", 200, "not", "not"))