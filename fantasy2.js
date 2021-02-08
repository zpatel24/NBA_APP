var express = require('express');
var router = express.Router();
var db=require('../database');

router.get('/fantasyGraph', function(req,res,next){

var sql='SELECT FLOOR(SUM(PTS)) AS TOTALPTS, FLOOR(SUM(TRB)) AS TOTALRBS, FLOOR(SUM(AST)) AS TOTALAST, FLOOR(SUM(STL)) AS TOTALSTL, FLOOR(SUM(BLK)) AS TOTALBLK FROM nba WHERE PTS > 20 ORDER BY PTS DESC LIMIT 10;';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('fantasyGraph', { title: 'User List', userData: data});
  });
});
module.exports = router;
