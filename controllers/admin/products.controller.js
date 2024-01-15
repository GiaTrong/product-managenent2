const Prdoduct = require('../../model/product.model')
// [GET] /admin/dashboard
module.exports.index = async (req, res) => {
    // give a data
    const products = await Prdoduct.find({
        deleted: false,
    })

    console.log(products)

  res.render("admin/pages/product/index", {
    pageTitle: "Trang san pham",
    products: products,
  });
};
