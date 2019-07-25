const express = require('express');
const router = express.Router();

router.get("/login", (request, response) => response.render("login"))
router.get("/register", (request, response) => response.render("register"))


router.post('/register', (request, response) => {
    const userObject = {
        name: request.body.name,
        email: request.body.email,
        pass1: request.body.password,
        pass2: request.body.password2,
    }

    const error = [];


    if (!userObject.name || !userObject.email 
        || !userObject.pass1 || !userObject.pass2) {
        error.push({
            msg: "Can't be empty"
        })
    }

    if (userObject.pass1 !== userObject.pass2)
        error.push({
            msg: "Passwords Don't Match"
        })

    if (userObject.pass1 < 6) error.push({
        msg: "Passwords Can't be less then 5 Charecters "
    })

    if (error.length > 0) {
        response.render('register', {
          error,
          name:userObject.name,
          email:userObject.email,
          pass1:userObject.pass1,
          pass2:userObject.pass2,
        });
    } else {
        response.send("Registerd")
    }


});


module.exports = router;