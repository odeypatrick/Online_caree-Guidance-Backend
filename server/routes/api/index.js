const router = require('express').Router()
const mongoose = require('mongoose')
const { request, signup, login } = require('./controllers/auth')
const { getAllReport, getSingleReport, addReport, deleteReport } = require('./controllers/reports')
const { url } = require('./url/url') 

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('connection successfull'))
.catch((err) => console.error(err))

router.get('/', (req, res) => {
    res.send("HELLO!! WE ARE LIVE")
})

// Request for auth
router.post('/auth/request', request)

//Signup - can be accessed by only an admin
router.post('/auth/signup', signup)

//login user
router.post('/auth/login', login)

// Get reports
router.get('/reports', getAllReport)

// Get single reports
router.get('/reports/:id', getSingleReport)

//Add report
router.post('/report/add', addReport)

//delete Report
router.delete('/report/delete', deleteReport)

module.exports = router