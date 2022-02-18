const User = require('../models/user')
const Request = require('../models/request')

exports.request = (req, res) => {
    const { email, phone } = req.body
    Request.findOne({ email: req.body.email }, (err, user) => {
        //check for server errors
        if(err) {
            return res.status(500).json({ success: false, messgae: "Somethign went wrong" })
        }

        // verify if email already exist
        if(user) {
            console.log("taken email")
            return res.status(401).json({ success: false, message: "Email Already Taken" })
        }
            //if every thing is fine. then create user
            Request.create({
                email,
                phone
            })
            .then(newUser => {
                return res.status(201).json({ success: true, message: "User signup successfull" + newUser })
            })
            .catch(err => {
                console.log(err)
                return res.status(500).json({ success: false, message: "User signup Not successfull"})
            })
    })
}

exports.signup = (req, res) => {
    const { email, phone } = req.body;
    if ((!req.body.email) || (!req.body.password)) {
        res.json({success: false, msg: 'Enter all fields'})
    }
    else {
        var newUser = User(req.body);
        newUser.save(function (err, newUser) {
            if (err) {
                res.json({success: false, msg: 'Failed to save'})
            }
            else {
                res.json({success: true, msg: 'Successfully saved'})
            }
        })
    }
}

exports.login = (req, res) => {
    User.findOne({
        email: req.body.email
    }, function (err, user) {
            if (err) throw err
            if (!user) {
                res.status(403).send({success: false, msg: 'Authentication Failed, User not found'})
            }

            else {
                user.comparePassword(req.body.password, function (err, isMatch) {
                    if (isMatch && !err) {
                        var token = jwt.encode(user, config.secret)
                        res.status(200).json({success: true, token: token})
                    }
                    else {
                        return res.status(403).send({success: false, msg: 'Authentication failed, wrong password'})
                    }
                })
            }
    }
    )
}