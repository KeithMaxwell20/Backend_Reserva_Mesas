module.exports = (app) => {
  const services = require("../controllers/servicesdao.controller.js");
  router = require("express").Router();
  router.get("/disponibles", services.findMesasSinReservas);
  
  app.use("/api/services", router);
};
