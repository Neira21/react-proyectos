const names = ['Alvaro', 'Juan', 'Neira']

names.forEach(function (name) {
  console.log(name)
})

const newName = names.map((name) => (
  name = name + ' Neira'
))

console.log(newName)
