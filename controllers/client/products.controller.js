const Product = require("../../model/product.model")
// [GET]
module.exports.index = async (req, res) => {
    const product = await Product.find({
        deleted: false,
    })
    
    res.render("client/pages/products/index.pug", {
        products: product
    });
}