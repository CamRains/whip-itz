# wip-itz e commerce

## backend 

### dependencies 

- express
- express-session
- massive
- dotenv
- bcrypt


### routes/ endpoints

**auth**
- login => /api/login
* logout => /api/logout

**admin**

- getAll: (/api/admin)

- getOne: /api/admin/:id

- register post : => /api/admin

-put: => /api/admin/:id

-delete => api/admin/:id


**products** 

-getAll: => /api/store

- getOne: => /api/store

- post: => /api/store

-put: => /api/store/:id

-delete : => /api/store/:id


- admin (users) table
```sql
create table admin(
id serial primary key,
username varchar (30) not null,
password varchar(64) not null,
first_name varchar (40) not null,
last_name varchar (40) not null,

)

```

- products table 
``` sql
create table products(
    product_id serial primary key,
    name varchar(25) not null,
    price float not null,
    description text not null,
    image text,
    admin_id integer references admin(id)
)
```

```sql
create table orders_info(
orderID
orderUserID
orderEmail
orderAmount
orderShipName
orderShipAddress
orderShipAddress2
orderCity
orderState
orderZip
orderCOuntry
orderPhone
orderShipping(price?)
orderTax
orderDatw


)


```
orders complete table??



### server file structure

/server
    -index.js
    -controller/
        -productController.js
        -adminCOntroller.js 
        -cart controller?
        - orders controller

        ### dotenv

```text
session secret
serverport
connection string

```





















- axios 
- react-router-dom
- redux 
- react-redux
- redux- promise-handler

