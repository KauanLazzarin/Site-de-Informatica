const dataBase = require('./database/db.js')

const landingPage = (req, res) => {
    res.render('index.html')
}

const schedulePage = (req, res) => {
    res.render('consult-schedule.html')
}

const scheduleConfirmation = (req, res) => {
    res.render('schedule-success.html')
}

const clientRegister = async (req, res) => {
    const registerClient = require('./database/client_register.js')

    const clientData = {
        user_name: req.body.user_name,
        user_adress: req.body.user_adress,
        user_email: req.body.user_email,
        user_tel_number: req.body.user_tel_number,
        service_select: req.body.service_select
    }

    try {
        const db = await dataBase
        await registerClient(db, {clientData})
        console.log('Registros adicionados com sucesso')
        return res.redirect('/schedule-confirmation')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    landingPage,
    schedulePage,
    clientRegister,
    scheduleConfirmation
}