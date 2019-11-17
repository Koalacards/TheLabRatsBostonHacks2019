ALTER USER 'root'@'localhost'; 
DROP SCHEMA IF EXISTS groceries;
CREATE SCHEMA groceries;
 
DROP TABLE IF EXISTS starmarket;
CREATE TABLE starmarket (
    itemname varchar(5000),
    itemprice varchar(100)
);

DROP TABLE IF EXISTS stopnshop;
CREATE TABLE stopnshop (
    itemname varchar(5000),
    itemprice varchar(100)
);

DROP TABLE IF EXISTS targetFood;
CREATE TABLE targetFood (
    itemname varchar(5000),
    itemprice varchar(100)
);

DROP TABLE IF EXISTS wholefoods;
CREATE TABLE wholefoods (
    itemname varchar(5000),
    itemprice varchar(100)
);

COPY stopnshop FROM 'C:\Users\hayde\Desktop\SnSCleanData.csv' DELIMITER ',';
COPY starmarket FROM 'C:\Users\hayde\Documents\GitHub\TheLabRatsBostonHacks2019\StarMarket.csv' DELIMITER ',';
COPY targetFood FROM 'C:\Users\hayde\Documents\GitHub\TheLabRatsBostonHacks2019\TargetData.csv' DELIMITER ',';
COPY wholefoods FROM 'C:\Users\hayde\Documents\GitHub\TheLabRatsBostonHacks2019\WholeFoods.csv' DELIMITER ',';

Select *
From stopnshop
Where Lower(itemname) LIKE '%' || LOWER('BANANA') ||'%'
ORDER BY itemprice ASC;

Select *
From starmarket
Where Lower(itemname) LIKE '%' || LOWER('BANANA') ||'%'
ORDER BY itemprice ASC;

Select *
From targetFood
Where Lower(itemname) LIKE '%' || LOWER('BANANA') ||'%'
ORDER BY itemprice ASC;

Select *
From wholefoods
Where Lower(itemname) LIKE '%' || LOWER('BANANA') ||'%'
ORDER BY itemprice ASC;