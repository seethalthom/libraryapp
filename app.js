const express = require('express');
const port = process.env.PORT || 2021;


const app = new express();
const nav = [{
    link: '/books',
    name: 'Books'
}, {
    link: '/authors',
    name: 'Authors'
}, {
    link: '/Signin',
    name: 'Sign in'
}, {
    link: '/Signup',
    name: 'Signup'
}, {
    link: '/admin',
    name: 'Add Books'
}, {
    link: '/addauthor',
    name: 'Add Authors'
}, {
    link: '/logout',
    name: 'Log out'
}];
const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const signinRouter = require('./src/routes/loginRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes')(nav);
const addbooksRouter = require('./src/routes/addbooksRoutes')(nav);
const addauthorsRouter = require('./src/routes/addauthorsRoutes')(nav);
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');


app.use('/books', booksRouter);
app.use('/authors', authorsRouter);
app.use('/signin', signinRouter);
app.use('/signup', signupRouter);
app.use('/admin', addbooksRouter);
app.use('/addauthor', addauthorsRouter);

app.get("/", function(req, res) {
    res.render("index", {
        nav,

        title: 'Library'
    });


});




app.listen(port, () => {
    console.log("Server ready at" + port)
});