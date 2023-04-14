const pacientes = [
  {
    name:"Luiz",
    age:20,
    weight:100,
    height:190,
  },

  {
    name:"Alex",
    age:27,
    weight:70,
    height:170,
  },

  {
    name:"Carlos",
    age:42,
    weight:90,
    height:180,
  },
]

function printPacientes(pacientes){
  alert(`Paciente ${pacientes.name} possuio IMC de ${(pacientes.weight / ((pacientes.height/ 100) ** 2)).toFixed(2)}`)
}

for(let paciente of pacientes){
  printPacientes(paciente)
}

