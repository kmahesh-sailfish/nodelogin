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
router.post('/test-page', function(req, res) {
    console.log('call',req.body);
    var userName = req.body.userName;
      var password = req.body.password;
   // var dbRequest = 'SELECT * FROM Students WHERE IDCard = \'' + req.query['id'] + '\'';
    //'SELECT * FROM users WHERE id = ?'
    connection.query('select userId from usersList where userName=?',[req.body.userName],function (err,rows,fields) {
        /*        "INSERT INTO cast (`name`, `portrait`, `role`, `bio`) VALUES ('" + data.name + "', '" + data.portrait + "', '" + data.role + "', '" + data.bio + "');";*/
        if(err) throw err;
        console.log('connection is established',JSON.stringify(rows));
        res.send(rows);
    });




});




router.get('/getuser/:userName',function (req,res,next) {
    var obj=req.params;
    connection.query('select userId from usersList where userName= ?',[obj.userName],function (err,rows,fields) {
/*        "INSERT INTO cast (`name`, `portrait`, `role`, `bio`) VALUES ('" + data.name + "', '" + data.portrait + "', '" + data.role + "', '" + data.bio + "');";*/
        if(err) throw err;
        console.log('connection is established',JSON.stringify(rows));
        res.send(rows);
    });

});


router.get('/getusers/:userName/:password',function (req,res,next) {
    var obj=req.params;
    connection.query('select userId from usersList where userName= ? && password=?',[obj.userName] ,[obj.password],function (err,rows,fields) {
        /*        "INSERT INTO cast (`name`, `portrait`, `role`, `bio`) VALUES ('" + data.name + "', '" + data.portrait + "', '" + data.role + "', '" + data.bio + "');";*/
        if(err) throw err;
        console.log('connection is established',JSON.stringify(rows));
        res.send(rows);
    });

});

router.get('/mahesh', function(req, res, next) {
    res.send('mahesh hello');
});

module.exports = router;