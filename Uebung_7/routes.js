const express = require('express');
const router = express.Router();
const User = require('./models/user');

//get all users
router.get('/users', async (req, res) => {
    const allUsers = await User.find();
    console.log(allUsers);
    res.send(allUsers);
});

// post one user
router.post('/AddUser', async (req, res) => {
    const existingUsername = await User.findOne({username: req.body.username});
    const existingEmail = await User.findOne({email: req.body.email});
    if (!existingUsername && !existingEmail) {
        const newUser = new User({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            role: req.body.role
        })
        await newUser.save();
        res.send(newUser);
    } else {
        res.status(400).json({error: 'username and/or email exist(s)'});
    }
});

// get one member via name
router.get('/users/:username', async (req, res) => {
    try {
        const oneUser = await User.findOne({username: req.params.username});
        console.log(req.params);
        res.send(oneUser);
    } catch {
        res.status(404);
        res.send({
            error: "User does not exist!"
        });
    }
});

// get one member via id
router.get('/users/:id', async (req, res) => {
    const userId = await User.findOne({_id: req.params.id});
    console.log(req.params);
    if (userId) {
        res.send(userId);
    } else {
        res.status(404);
        res.send({
            error: "User does not exist!"
        });
    }
})

// delete one member via id
router.delete('/users/:id', async (req, res) => {
    try {
        await User.deleteOne({_id: req.params.id})
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({error: "User does not exist!"})
    }
});

// update one member
router.put('/users/:id', async (req, res) => {
    try {
        const userUp = await User.findOne({_id: req.params.id})

        if (req.body.username) {
            userUp.username = req.body.username
        }

        if (req.body.password) {
            userUp.password = req.body.password
        }

        if (req.body.email) {
            userUp.email = req.body.email
        }

        if (req.body.role) {
            userUp.role = req.body.role
        }

        await User.updateOne({_id: req.params.id}, userUp);
        res.send(userUp)
    } catch {
        res.status(404)
        res.send({error: "User does not exist!"})
    }
});

module.exports = router;
