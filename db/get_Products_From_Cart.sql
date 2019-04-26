select * from UserCart
join products on products.product_id = UserCart.product_id
where UserCart.user_id = 4;