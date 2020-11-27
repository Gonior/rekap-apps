var express = require('express');
const upload = require('../controller/mutlerController')
const toJSON = require('../controller/csvtojsonController')
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Thifa' });
});

router.post('/addFile', upload.any(),(req, res) =>{
  res.render('tableView', {data :toJSON()})
});

module.exports = router;
