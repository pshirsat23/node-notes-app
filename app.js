const yargs = require('yargs')
const notes = require('./notes.js')
// Customize yargs version
yargs.version('1.1.0')

// Create Add command
yargs.command({
    command: 'add',
    describe: 'Add the Note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    
    /*handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
    */

    // ES6
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a Note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

// Create List command
yargs.command({
    command: 'list',
    describe: 'List out all the Notes',
    handler(){
        notes.listNotes()
    }
})

// create Read Command
yargs.command({
    command: 'read',
    describe: 'Read the Note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse() //console.log(yargs.argv)



/*
const chalk = require('chalk')
console.log(chalk.bold.blue('Success...'))



const validator = require('validator')
console.log(validator.isEmail('pshirsat@example.com'))
console.log(validator.isURL('https:/mead.io'))


const add = require('./utils.js')
const sum = add(4,-2)
console.log(sum)

const fs = require('fs')
fs.writeFileSync('notes.js','Hello world!')
fs.appendFileSync('notes.js',' Myself Pranali. I am from Pune')
*/












/* 
const command = process.argv[2]

console.log(command)

if(command === 'add'){
    console.log('adding Note...')
}else if(command === 'remove'){
    console.log('deleting Note...')
}







*/