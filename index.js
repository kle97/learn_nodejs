const app = require('./app')
// const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')

// http.createServer is deprecated in Express 4.0+, app.listen() is enough to start app
// const server = http.createServer(app)
// server.listen(config.PORT, () => {
//     logger.info(`Server running on port ${config.PORT}`)
// })
// add dasdsdasdasdasd

app.listen(config.PORT, () => {
    logger.info(`Server running on port ${config.PORT}`)
})