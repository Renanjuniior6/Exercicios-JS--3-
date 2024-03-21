const students = [
    {name: "renato", age: 5},
    {name: "lucas", age: 7},
    {name: "pedro", age: 15},
    {name: "gustavo", age: 22},
    {name: "gabriel", age: 4},
    {name: "david", age: 10},

]






let allStudentsAge = 0

students.forEach((alunos,indice) => {
allStudentsAge = allStudentsAge + alunos.age

const average = allStudentsAge / students.length

console.log(`O aluno se chama ${alunos.name}, tem ${alunos.age} anos e está na posição ${indice}`)
})






const numbers = [20, 30, 10, 5]
const toReais = number => `R$ ${number.toFixed(2)}`
const double = number => number * 2
const sum = number => number + 10
const minus = number => number - 58 



const newArray2 = numbers.map(double).map(toReais)
console.log(newArray2)






const newArray = numbers.map((numero) => {
    return numero * 3 
})
console.log(newArray)
console.log(numbers)





const novosalunos = students.map((student) => {
    const novosalunos = {
        name: student.name + ' da Silva',
        age: student.age - 5}
        return novosalunos
})
console.log(novosalunos)