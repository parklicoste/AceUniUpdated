const generateError = require("../utils/generateError");
const bcrypt = require('bcryptjs');
const signInHandler = require("../utils/signInHandler");
const User = require("../models/User");
const Feedback = require("../models/Feedback");

exports.signup = async (req, res, next) => {
    try {
        const password = req.body.password;
        if (!password || password.length < 6) generateError('Password must be minimum 6 characters long!', 422);
        const hashPassword = await bcrypt.hash(password, 12);
        const newUser = (await new User({
            email: (req.body.email).toLowerCase(),
            password: hashPassword,
            occupation: String(req.body.occupation).toLowerCase(),
            name: 'Acer',
            contribution: 0,
            mobile: 0
        }).save())._doc;
        res.status(201).json(signInHandler(newUser))
    }
    catch (err) {
        next(err)
    }
}


exports.signin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) generateError('Email or password is invalid!', 422);
        const user = await User.findOne({ email: email.toString() });
        if (!user) generateError('Email or password is invalid!', 404);
        const isEqual = await bcrypt.compare(password, user.password);
        if (!isEqual) generateError('Email or password is invalid!', 401);
        res.status(200).json(signInHandler(user._doc));
    }
    catch (err) {
        next(err)
    }
}

exports.updateProfile = async (req, res, next) => {
    try {
        console.log(req.body)
        console.log(req.user)
        User.updateOne({ _id: req.user._id }, { $set: req.body })
    }
    catch (err) {
        next(err)
    }
}

exports.feedback = async (req, res, next) => {
    try {
        const feedback = req.body.feedback;
        
        const newFeedback = (await new Feedback({
            feedback: feedback
        }).save());
        res.status(201).json(newFeedback)
    }
    catch (err) {
        next(err)
    }
}