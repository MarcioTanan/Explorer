let students = [
  {
      name: "Andre",
      note1: 9,
      note2: 10,
  },

  {
      name: 'Dharana',
      note1: 5,
      note2: 7,
  },

  {
      name: "Gabriela",
      note1: 10,
      note2: 7,
  },

  {
      name: "Vicente",
      note1: 8,
      note2: 3,
  },
]

function average(value1, value2) {
  return ((value1 + value2) / 2)
}

function positive(person) {
  return `A média do aluno(a) ${person.name} foi de ${average(person.note1, person.note2)} 
  \nParabéns, ${person.name}! Você foi aprovado no concurso!`
}

function negative(person) {
  return `a média do aluno(a) ${person.name} foi de ${average(person.note1, person.note2)} 
  \nNão foi dessa vez, ${person.name}... tente novamente!`
}

for (let student of students) {
  if (average(student.note1, student.note2) >= 7) {
      alert(positive(student))
  } else {
      alert(negative(student))
  }
}
