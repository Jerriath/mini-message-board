var express = require('express');
var router = express.Router();

let messages = [
  {
    title: "Greetings",
    msg: "Hi, there!",
    user: "Amando",
    added: new Date()
  },
  {
    title: "Hellooooo",
    msg: "World!",
    user: "Charles",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini-Messageboard', messages: messages });
});

router.get("/new", (req, res, next) => {
  res.render("form");
})

router.post("/new", (req, res, next) => {
  let contents = req.body;
  let newMsg = {
    title: contents.title,
    msg: contents.msg,
    user: contents.user,
    added: new Date()
  }
  messages.push(newMsg);
  res.redirect("/");
})

module.exports = router;
