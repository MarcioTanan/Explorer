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

let pacientesNames = []

for(let paciente of pacientes) {
  pacientesNames.push(paciente.name)
}

alert(pacientesNames)