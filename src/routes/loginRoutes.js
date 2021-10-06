const express = require('express');
const signinRouter = express.Router();


function signinrouter(nav) {

    signinRouter.get('/', function(req, res) {

        res.render('signin', {
            nav,
            title: 'Library',


        })

    })
    return signinRouter;
}

module.exports = signinrouter;