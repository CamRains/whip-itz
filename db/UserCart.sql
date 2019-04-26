insert into UserCart (product_id,user_id)
values ($1,$2)
returning *;