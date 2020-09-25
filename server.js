const express = require('express')
const server = express()
const port = 3003
const nunjucks = require('nunjucks')
const {landingPage, schedulePage, clientRegister, scheduleConfirmation, servicesPage} = require('./src/pages.js')
const { urlencoded } = require('express')


nunjucks.configure ('src/views', {
    express: server,
    noCache: true,
})

server
    .use('/public', express.static('public'))
    .use(express.urlencoded({extended:true}))
    .get('/', landingPage)
    .get('/schedule', schedulePage)
    .get('/services', servicesPage)
    .get('/schedule-confirmation', scheduleConfirmation)
    .post('/schedule-post', clientRegister)
    .listen(port, console.log('Servidor rodando normalmente'))