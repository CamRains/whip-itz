drop table if exists products;
drop table if exists admin;



create table admin(
    id serial primary key,
    username varchar(40) not null,
    password varchar(64) not null,
    first_name varchar(40) not null,
    last_name varchar(40) not null
);
insert into admin(username,password,first_name,last_name)
values('csr66@nau.edu', 'password420','cameron','rains');

create table products(
    product_id serial primary key,
    name varchar(25) not null,
    price float not null,
    description text not null,
    image text not null,
    admin_id integer references admin(id)
);

insert into products (name,price,description,image,admin_id)
values('Nock 2 IT Custom Release','200.00','the most popular nockon handheld release', 'https://www.nockonarchery.com/324-large_default/nock-on-custom-release.jpg',1),
('silverback','200.00','tensions activated', 'https://www.nockonarchery.com/323-large_default/silverback.jpg',1);

create table UserCart(
 user_cart_id serial primary key,
 product_id integer references products(product_id),
 user_id integer references users(user_id),
 quantity integer default 0
 );
 insert into UserCart(product_id,user_id)
 values(1,1,1);


 create table users(
     user_id serial primary key
 )