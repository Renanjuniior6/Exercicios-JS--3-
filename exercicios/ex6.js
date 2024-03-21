//[ ] A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de
//filhos. A prefeitura deseja saber: - média do salário da população; - média do número de filhos; - maior salário; - 
//O final da leitura de dados se dará com a entrada de um salário negativo. - Faça isso usando uma função!


const people = [

    { name: "Matheus",
     Salary: 1200, 
     child: 1 
    },

    { name: "João",
     Salary: 1500,
      child: 2 
    },
    { name: "Pedro",
     Salary: 1700,
      child: 2 
    },
    { name: "Gabriel",
     Salary: 2000,
      child: 3 
    },
    { name: "Jorge",
     Salary: 5000,
      child: 1 
    },
    { name: "Bianca",
     Salary: -2000,
      child: 3 
    }
]

function findAverageAndHighestWage (peopleinformation) {

    let i = 0;

    let averageSalary = 0
    let averageChildren = 0
    let highestSalary = 0

    while (peopleinformation[i].Salary > 0) {
        averageSalary = averageSalary + peopleinformation[i].Salary
        averageChildren += peopleinformation[i].child
        peopleinformation[i].Salary > highestSalary ? highestSalary = peopleinformation[i].Salary : highestSalary = highestSalary
        i++
    }    
   

        
            console.log(`Média de salário R$ ${(averageSalary / i).toFixed(0)}`)
            console.log(`Média de filhos ${(averageChildren / i).toFixed(0)}`)
            console.log(`Maior salário R$ ${highestSalary}`)
           

        } 
        
    


findAverageAndHighestWage(people)