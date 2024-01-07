const express = require("express");
const cryptoJs = require("crypto-js");
const router = express.Router();
const mysql = require("mysql2");
const utils = require("../utils");

const connectionDetails = {
  host: "localhost",
  user: "root",
  password: "1234",
  database: "cart",
  port:3307,
};

router.post("/", (request, response) => {
  const {userId,productId,productTitle,price,quantity}=request.body;
  const query = `INSERT INTO cart(userId,productId,productTitle,price,quantity) values(${userId},${productId},'${productTitle}',${price},${quantity})`;
  const connection = mysql.createConnection(connectionDetails);
  connection.query(query, (error, result) => {
    response.send(utils.createResult(error, result));
  });
});

router.get("/:userId", (request, response) => {

    const userId=request.params.userId;
    const query=`select productId,productTitle,price,quantity from cart where userId=${userId}`;
    const connection = mysql.createConnection(connectionDetails);
    connection.query(query, (error, cartItems) => {
            response.send(utils.createResult(error,cartItems));
    });
});

module.exports = router;

