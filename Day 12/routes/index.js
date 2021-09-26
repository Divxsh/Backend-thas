var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const sess = req.session;
  // sess.username = "ketan";
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req,res,next) {
  console.log("hello");
  res.status(201).send(req.session.username)
})

module.exports = router;
