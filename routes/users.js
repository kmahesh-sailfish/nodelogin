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

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

    connection.query('select * from testUsers',function (err,rows,fields) {
        if(err) throw err;
        console.log('connection is established',JSON.stringify(rows));
        res.send(rows);

    });

});


router.post('/getLogins',function (req,res,next) {
    var userName = req.body.userName;
    var password = req.body.password;
    var sql='select userId from usersList  where userName="'+userName+'" and password="'+password+'"'
    /*var sql='select userId from usersList where userName='+userName+' AND '+'password='+password*/
    console.log(sql);
    connection.query(sql,function (err,rows,fields) {
        res.send(rows);
    })

});

/*
router.post('/getLogin',function (req,res,next) {
    var userName = req.body.userName;
    var password = req.body.password;
   var qury='select userId from usersList where userName='+userName+' AND password='+password;
   console.log(qury);
        connection.query(qury,function (err,result) {
            console.log(err);
        })

});*/

router.get('/mahesh', function(req, res, next) {
    res.send('mahesh hello');
});

module.exports = router;