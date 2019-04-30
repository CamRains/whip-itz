update UserCart
set quantity = $3
where user_cart_id = $1
and product_id = $2;