var express = require('express');
var { DateTime } = require("luxon");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: DateTime.now().toLocaleString(DateTime.DATETIME_MED),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: DateTime.now().toLocaleString(DateTime.DATETIME_MED),
  },
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', msg_list: messages });
});

router.post('/new', function(req, res, next) {
  messages.push({text: req.body.msg, user: req.body.name, added: DateTime.now().toLocaleString(DateTime.DATETIME_MED)});
  res.redirect('/');
});

module.exports = router;
