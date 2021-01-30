const fs = require('fs')

const filename = 'data.json'

const data = fs.readFileSync(filename) 

let JSONData = data.toString()
let parsedData = JSON.parse(data)

const name = prompt('What is your name? ')
const planet = prompt('Which planet are you come from? ')
const age = prompt('What is your age? ')

parsedData.name = name
parsedData.planet = planet
parsedData.age = age

const stringifyData = JSON.stringify(parsedData)

fs.writeFileSync(filename, stringifyData)

console.log('Data updated')