var exp = require('express');
var obj = exp();
var encoded = exp.urlencoded({ extended: true });
var role = ""
obj.get('/role', (req, res) => {
    res.sendFile(__dirname + '/practice1.html');
})
obj.post('/authenticate', encoded, (req, res) => {
    role = req.body.n1;
    res.redirect('/home')

})
auth = (req, res, next) => {
    if (role == "admin") {
        console.log("authenticated");
        next();

    }
    else {
        console.log("wrong user");
    }
}
obj.get('/home', auth, (req, res) => {
    res.send(`<h1>page will only open if it is a valid user</h1>`);
})
obj.listen(3000, () => { console.log("server running") });