const express = require('express');
const authorsRouter = express.Router();


function authrouter(nav) {
    var authors = [{
        title: 'Tom and Jerry',
        author: 'Joseph Barbera',
        genre: 'Cartoon',
        img: 'joseph.jpg'

    }, {
        title: 'Harry Potter',
        author: 'J K Rowling',
        genre: 'Fantasy',
        img: 'rowling.jpg'

    }, {
        title: 'Pathumede aadu',
        author: 'Basheer',
        genre: 'Drama',
        img: 'basheer.jpg'

    }]

    authorsRouter.get('/', function(req, res) {
        res.render("authors", {
            nav,
            title: 'Library',
            authors
        })
    });
    authorsRouter.get('/:idd', function(req, res) {
        const idd = req.params.idd
        res.render('author', {
            nav,
            title: 'Library',
            author: authors[idd]


        })
    })
    return authorsRouter;
}

module.exports = authrouter;