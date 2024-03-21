//[ ] Escreva um programa onde, você chame uma função, e ela diga a hora exata!

//-> modo de data bruto:

//const now = new Date

//console.log("hoje é", now.getDay(),",", now.getDate(), "de", now.getMonth(), "de", now.getFullYear())


//-> data mais completa

//const Dayname = ['domingo','segunda', 'terça' ,'quarta', 'quinta', 'sexta', 'sábado']
//const Monname = ['janeiro', 'fevereiro',  'março',  'abril',  'maio',  'junho', 'julho',  'agosto',  'setembro',  'outubro',  'novembro',  'dezembro']
//const now= new Date

//console.log('Hoje é', Dayname[now.getDay()], ",", now.getDate(), "de", Monname[now.getMonth()], "de", now.getFullYear())

//-> horários em tempo real:

//function time () {
    //const today= new Date();
    //h = today.getHours();
    //m = today.getMinutes();
    //s = today.getSeconds();

function Hora () {
const hour= new Date
console.log("Agora são",hour.getHours()+":"+hour.getMinutes()+":"+hour.getSeconds()+":"+hour.getMilliseconds())

}

Hora()


//outra forma de achar a hora exata:
console.log(new Date().toLocaleTimeString('pt-BR'))






   