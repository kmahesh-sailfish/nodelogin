/**
 * Created by Mahesh on 4/22/2017.
 */
var express = require('express');
var mysql=require('mysql');
var connection=mysql.createConnection({
    host:'vvfv20el7sb2enn3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user:'zrnrfe9zobkl0pwr',
    password:'tgor7glk44rmlm80',
    database:'rgxrisv4kau4y50h'
});
connection.connect();
var router = express.Router();

/* GET users listing. */
router.get('/mahesh', function(req, res, next) {

    connection.query('select * from usersList',function (err,rows,fields) {
        if(err) throw err;
        console.log('connection is established',JSON.stringify(rows));
        res.send(rows);

    });
    connection.end();
});

router.get('/', function(req, res, next) {
    res.send('mahesh hello');
});

module.exports = router;