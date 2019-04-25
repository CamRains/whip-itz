insert into UserCart (product_id,user_id,quantity)
values ($1,$2,$3)
returning *;