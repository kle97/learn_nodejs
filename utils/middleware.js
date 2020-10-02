const logger = require('./logger')

const requestLogger = (request, response, next) => {
    logger.info('Method:', request.method)
    logger.info('Path:  ', request.path)
    logger.info('Body:  ', request.body)
    logger.info('---')
    next()
}

const unknownEndpoint = (request, response) => {
    response.status(404).send({error: 'unknown endpoint'})
}

const errorHandler = (error, request, response, next) => {
    logger.error(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({error: 'malformatted id'})
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({error: error.message})
    } else if (error.name === 'JsonWebTokenError') {
        return response.status(401).json({
            error: 'invalid token'
        })
    }

    next(error)
}

const redirectHttps = (require, response, next) => {
    logger.info(require.header('x-forwarded-proto'))
    logger.info(require.header('host'))
    logger.info(require.url)
    if (require.header('x-forwarded-proto') !== 'https')
        response.redirect(301, `https://${require.header('host')}${require.url}`)
    else if(!require.header('host').match(/^www\..*/i))       // redirect * domain to www subdomain
        response.redirect(301, `https://www.${require.header('host')}${require.url}`)
    else
        next()
}

module.exports = {
    requestLogger,
    unknownEndpoint,
    errorHandler,
    redirectHttps
}