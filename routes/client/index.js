const routeProduct = require("./product");
const routeHome = require("./home");

module.exports = (app) => {

  app.use("/", routeHome);

  app.use("/products", routeProduct);
};
