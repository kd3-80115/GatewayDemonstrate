const express = require("express");
const cryptoJs = require("crypto-js");
const router = express.Router();
const mysql = require("mysql2");
const utils = require("../utils");

const connectionDetails = {
  host: "localhost",
  user: "root",
  password: "1234",
  database: "microservice",
  port:3307,
};

router.post("/signup", (request, response) => {
  //we are encrypting password using crypto js
  const encryptedPassword = String(cryptoJs.MD5(request.body.password));

  const query = `INSERT INTO users(firstname,lastname,email,password) values('${request.body.firstname}','${request.body.lastname}','${request.body.email}','${encryptedPassword}')`;
  const connection = mysql.createConnection(connectionDetails);
  connection.query(query, (error, result) => {
    response.send(utils.createResult(error, result));
  });
});

router.post("/signin", (request, response) => {
    const encryptedPassword = String(cryptoJs.MD5(request.body.password));

    const query = `select id,firstname,lastname from users where email='${request.body.email}' and password='${encryptedPassword}'`;
    const connection = mysql.createConnection(connectionDetails);
    connection.query(query, (error, result) => {
        if(error)
        {   
            response.send(utils.createErrorResult(error));
        }
        else if(result.length ===0)
        {
            //user not found
            response.send(utils.createErrorResult('user does not exists'));
        }
        else{
            //user found with email and password
            response.send(utils.createSuccessResult(result[0]));
        }
    });
});

module.exports = router;

