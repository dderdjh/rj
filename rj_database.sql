SET NAMES UTF8;
DROP DATABASE IF EXISTS rj;
CREATE DATABASE rj CHARSET=UTF8;
USE rj;

#创建用户表 rj_user
CREATE TABLE rj_user(
  uid INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(32),
  phone VARCHAR(16) NOT NULL UNIQUE,
  avatar VARCHAR(128), #用户头像
  gender INT

);