var express = require('express');
var router = express.Router();
var db=require('../database');

router.get('/fantasyList', function(req,res,next){

var sql='SELECT * FROM nba WHERE PTS > 20 ORDER BY PTS DESC LIMIT 10';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('fantasyList', { title: 'User List', userData: data});
  });
});
module.exports = router;
