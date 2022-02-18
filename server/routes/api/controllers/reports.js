const Report = require('../models/reports')

exports.getAllReport = (req, res) => {
    Report.find({ user: req.params.id }).exec()
    .then(reports => {
        return res.status(200).json({ reports })
    })
    .catch(err => {
        return res.status(500).json({ err })
    })
}

exports.getSingleReport = (req, res) => {
    Report.find({ user: req.params.id }).exec()
    .then(reports => {
        return res.status(200).json({ reports })
    })
    .catch(err => {
        return res.status(500).json({ err })
    })
}

exports.addReport = (req, res) => {
    Report.create(req.body)
    .then(res => {
        return res.status(201).json({  success: true, message: "report added" })
    })
    .catch(err => {
        return res.status(500).json({ sucess: false, message: "Server error" })
    })
}

exports.deleteReport = (req, res) => {[
    Report.findByIdAndDelete(req.params.id)
    .then(res => {
        res.status(200).json({ res })
    })
    .catch(err => {
        res.status(500).json({err})
    })
]}