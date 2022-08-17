create database dashboard;
use dashboard;
create table OrderLists (orderNumber INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,productStatus VARCHAR(30) NOT NULL, operator VARCHAR(30) NOT NULL,location VARCHAR(30) NOT NULL,distance INT(6) NOT NULL , startDate timestamp , estimatedDeliveryDate datetime);

insert into OrderLists (productStatus,operator,location,distance,estimatedDeliveryDate) values('Cancelled','Dharani','Germany',240,'2019-10-10 08:02:00');
insert into OrderLists (productStatus,operator,location,distance,estimatedDeliveryDate) values('Moving','Thomas','Germany',400,'2019-10-11 10:00:00');
insert into OrderLists (productStatus,operator,location,distance,estimatedDeliveryDate) values('Pending','Praveen','Austria',460,'2019-10-12 16:00:00');
insert into OrderLists (productStatus,operator,location,distance,estimatedDeliveryDate) values('Moving','Dharani','Germany',240,'2019-10-15 18:00:00');
insert into OrderLists (productStatus,operator,location,distance,estimatedDeliveryDate) values('Pending','Xavier','Germany',240,'2019-10-15 18:00:00');
insert into OrderLists (productStatus,operator,location,distance,estimatedDeliveryDate) values('Moving','Adrien','Belgium',450,'2019-10-20 14:00:00');
insert into OrderLists (productStatus,operator,location,distance,estimatedDeliveryDate) values('Cancelled','Elisabeth','Austria',460,'2019-10-22 14:00:00');

create table Products (productName varchar(30) NOT NULL,unitSold int(10) not null ,inStock int(10) not null ,expireDate date);

insert into Products values ('product 1',6542,457,'2018-09-28');
insert into Products values ('product 2',1450,550,'2018-09-28');
insert into Products values ('product 3',1656,241,'2018-09-28');
insert into Products values ('product 4',8957,312,'2018-09-28');
insert into Products values ('product 5',6542,124,'2018-09-28');
insert into Products values ('product 6',4152,510,'2018-09-28');
insert into Products values ('product 7',3124,213,'2018-09-28');
insert into Products values ('product 8',1452,610,'2018-09-28');
insert into Products values ('product 9',2541,214,'2018-09-28');
insert into Products values ('product 10',1243,310,'2018-09-28');
 
 create table ProductCategory (category varchar(30) not null);
insert into productCategory values ('product Category 1');
insert into productCategory values ('product Category 2');
insert into productCategory values ('product Category 3');
insert into productCategory values ('product Category 4');
insert into productCategory values ('product Category 5');
insert into productCategory values ('product Category 6');
insert into productCategory values ('product Category 7');
insert into productCategory values ('product Category 8');
insert into productCategory values ('product Category 9');
insert into productCategory values ('product Category 10');