var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', msg_list: messages });
});

router.post('/new', function(req, res, next) {
  messages.push({text: req.body.msg, user: req.body.name, added: new Date()});
  res.redirect('/');
});

module.exports = router;
