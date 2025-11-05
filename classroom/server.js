const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");

const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true,
};

app.use(session(sessionOptions));

app.get("/register", (req, res) => {
    let {name = "anonymous"} = req.query;
    req.session.name = name;
    console.log(req.session.name );
    
    console.log(req.session);
    
    res.redirect("/hello");
});

app.get("/hello", (req, res) => {
    res.send(`hello, ${req.session.name}`);
})

// app.get("/reqcount", (req, res) => {
//     if (req.session.count) {
//         req.session.count++;
//     } else {
//         req.session.count = 1;

//     }
//     res.send(`You sent a request ${req.session.count} trime`);
// });

// app.get("/test", (req, res) => {
//     console.log("test successful!");
//     res.send("test successful!")
// });

app.listen(3000, () => {
    console.log("server is listening to 3000");
});