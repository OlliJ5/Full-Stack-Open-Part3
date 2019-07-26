const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true })
  .then(res => {
    console.log('connected to database')
  })
  .catch(error => {
    console.log('error occured', error)
  })

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

//mongodb+srv://fullstack:salainensalasana@cluster0-joy6c.mongodb.net/phonebook?retryWrites=true&w=majority

module.exports = mongoose.model('Person', personSchema)