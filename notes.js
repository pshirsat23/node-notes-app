const fs = require('fs')
const chalk = require('chalk')

// const getNotes = function (){
//     return 'Your Notes...'
// }

// arrow function
const getNotes = () => {
    return 'Your Notes...'
}

const addNote = (title , body) => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note) => note.title === title) 
    const duplicateNote = notes.find((note) => note.title === title)

    // const duplicateNotes = notes.filter(function (note){
    //     return note.title === title
    // })

    if(!duplicateNote){                        //if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse.bold('New Note Added...!'))
    }else{
        console.log('Note Title Taken...!')     
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note){
        return note.title !== title
    })
    
    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse.bold("Note Removed!"))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.bgRed.bold("No Note Found!"))
    }   
}
const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.red.bold('Your Notes..'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if(note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

const saveNotes = function (notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = function (){
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch (e){
        return []
    }
}



module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}