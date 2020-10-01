const notesRouter = require('express').Router()
const Note = require('../models/note')

notesRouter.get('/', async (request, response, next) => {
    try {
        const note = await Note.find({})
        response.json(note)
    } catch (error) {
        next(error)
    }
})

notesRouter.get('/:id', async (request, response, next) => {
    try {
        const note = await Note.findById(request.params.id)
        note ? response.json(note) : response.status(404).end()
    } catch (error) {
        next(error)
    }
})

notesRouter.delete('/:id', async (request, response, next) => {
    try {
        await Note.findByIdAndRemove(request.params.id)
        response.status(204).end()
    } catch (error) {
        next(error)
    }
})

notesRouter.post('/', async (request, response, next) => {
    const body = request.body

    const note = new Note({
        content: body.content,
        important: body.important || false,
        date: new Date(),
    })

    try {
        const result = await note.save()
        response.json(result)
    } catch (error) {
        next(error)
    }
})

notesRouter.put('/:id', async (request, response, next) => {
    const body = request.body

    const note = {
        content: body.content,
        important: body.important,
    }

    try {
        const result = await Note.findByIdAndUpdate(request.params.id, note, {new: true})
        response.json(result)
    } catch (error) {
        next(error)
    }
})

module.exports = notesRouter
