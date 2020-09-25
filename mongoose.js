const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]
const dbName = "note-app"
const url = `mongodb+srv://user1:${password}@learn-nodejs.w7eyr.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})

const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note(
    {
        content: 'HTML is Easy',
        date: new Date(),
        important: true,
    },
    {
        content: "Browser can execute only Javascript",
        date: new Date(),
        important: false
    },
    {
        content: "GET and POST are the most important methods of HTTP protocol",
        date: new Date(),
        important: true
    }
)

note.save().then(result => {
    console.log('note saved!')
    mongoose.connection.close()
})