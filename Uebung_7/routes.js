const express = require('express');
const router = express.Router();
const User = require('./models/user');

// eine GET-Anfrage- TEST
// router.get('/', async(req, res) => {
//
//     res.send({ message: "Hello FIW!" });
// });

router.get('/users', async(req, res) => {
    const allUsers = await User.find();
    console.log(allUsers);
    res.send(allUsers);
});


module.exports = router;
