const { response } = require('express');
const { generateJwt } = require('../helpers/jwt');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const createUser = async (req, res = response) => {
    try {
        const { email } = req.body;
        let user = await User.findOne({ email });
        // check mail existence
        if (user) {
            return res.status(400).json({
                ok: false,
                msg: "Error: Email already in use"
            });
        }
        user = new User(req.body);
        // password encrypt
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);

        // user creation
        await user.save();


        // Generate JWT
        const token = await generateJwt(user.id, user.name);

        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            msg: "User created",
            token
        });
    }
    catch (e) {
        res.status(500).json({
            ok: false,
            msg: "Error: " + e
        })
    }
}

const loginUser = async (req, res = response) => {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({
            ok: false,
            msg: "Error: Email not recognized"
        });
    }
    // Password check
    let passwordCheck = bcrypt.compareSync(password, user.password);
    if (!passwordCheck) {
        return res.status(400).json({
            ok: false,
            msg: "Error: Password not match"
        });
    }

    // Generate JWT
    const token = await generateJwt(user.id, user.name);

    res.status(200).json({
        ok: true,
        uid: user.id,
        name: user.name,
        token
    });
}

const renewUser = async(req, res = response) => {
    const {uid, name} = req;

    // Generate JWT
    const token = await generateJwt(uid, name);

    res.json({
        ok: true,
        token
    });
}



module.exports = { createUser, loginUser, renewUser };