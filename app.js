const express = require('express')
const app = express()

const PORT = process.env.PORT || 5001

app.get('/', (req, res) => {
  res.send('Phonebook CI/CD app is running')
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})