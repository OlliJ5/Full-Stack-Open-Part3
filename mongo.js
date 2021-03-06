const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@cluster0-joy6c.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 5) {
  const name = process.argv[3]
  const number = process.argv[4]
  const person = new Person({
    name: name,
    number: number
  })

  person.save().then(res => {
    console.log(`Added ${res.name} number ${number} to the Phonebook`)
    mongoose.connection.close()
  })

} else if (process.argv.length === 3) {
  console.log('Puhelinluettelo')

  Person.find({}).then(res => {
    res.forEach(person => {
      console.log(person.name, person.number)
    })
    mongoose.connection.close()
  })

}


