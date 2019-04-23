module.exports = {

getAll: (req,res) => {
    const db= req.app.get('db')
    console.log('pC getAll')

    db.get_products().then(products => {
        console.log(products)
        res.status(200).send(products)
    }).catch(err => console.log('error in getAll',err))
},
    addToCart: (req,res) => {
        const db=req.app.get('db');
        const{name, price, description, image} =req.body
        db.addToCart([name,price,description,image]).then(product => {
            res.status(200).send(homes)
        }).catch(err => console.log('error in creat'))
    }


}