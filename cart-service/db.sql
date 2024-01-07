create database cart;
use cart;
create table cart(id integer primary key auto_increment,userId integer,productId integer,price double,productTitle varchar(200),quantity integer default(1));