const notesRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const Note = require('../models/note')
const User = require('../models/user')

notesRouter.get('/', async (request, response) => {
    const note = await Note.find({}).populate('user', { username: 1, name: 1 })
    response.json(note)
})

notesRouter.get('/:id', async (request, response) => {

    const note = await Note.findById(request.params.id)
    note ? response.json(note) : response.status(404).end()

})

notesRouter.delete('/:id', async (request, response) => {

    await Note.findByIdAndRemove(request.params.id)
    response.status(204).end()

})

const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
    return null
}

notesRouter.post('/', async (request, response) => {
    const body = request.body

    const token = getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' })
    }

    const user = await User.findById(decodedToken.id)

    const note = new Note({
        content: body.content,
        important: body.important || false,
        date: new Date(),
        user: user._id
    })

    const result = await note.save()
    user.notes = user.notes.concat(result._id)
    await user.save()
    response.json(result)

})

notesRouter.put('/:id', async (request, response) => {
    const body = request.body

    const note = {
        content: body.content,
        important: body.important,
    }

    const result = await Note.findByIdAndUpdate(request.params.id, note, {new: true})
    response.json(result)

})

module.exports = notesRouter
