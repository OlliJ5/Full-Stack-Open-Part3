const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()

app.use(bodyParser.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

morgan.token('body', (req, res) => JSON.stringify(req.body) )

let contacts = [
  {
    "name": "Arto Hellas",
    "number": "040-123456",
    "id": 1
  },
  {
    "name": "Ada Lovelace",
    "number": "39-44-5323523",
    "id": 2
  },
  {
    "name": "Dan Abramov",
    "number": "12-43-234345",
    "id": 3
  },
  {
    "name": "Mary Poppendieck",
    "number": "39-23-6423122",
    "id": 4
  }
]

app.get('/info', (req, res) => {
  const date = new Date()
  res.send(`<p>Phonebook has info of ${contacts.length} people</p>${date}`)
})

app.get('/api/persons', (req, res) => {
  res.json(contacts)
})

app.post('/api/persons', (req, res) => {
  const person = req.body

  const exists = contacts.map(contact => contact.name).includes(person.name)

  if (!person.name) {
    return res.status(400).json({ error: 'name missing' })
  } else if (!person.number) {
    return res.status(400).json({ error: 'number missing' })
  } else if (exists) {
    return res.status(400).json({ error: 'name must be unique' })
  }

  person.id = Math.floor(Math.random() * 10000)

  contacts = contacts.concat(person)
  res.json(person)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = contacts.find(contact => contact.id === id)

  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  contacts = contacts.filter(contact => contact.id !== id)
  res.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})