const db = require("../models");
const music = require("./products.json");

db.sequelize
  .sync({ force: true })
  .then(function() {
    console.log("loading db...");
    return db.Product.bulkCreate(music);
  })
  .then(function() {
    db.sequelize.close();
  });