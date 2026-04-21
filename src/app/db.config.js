const Sequelize = require("sequelize")
const crearConfigBaseDades = () =>{
  return new Sequcdelize ("sportshubbd","root","Admin_123np",{
    host: "localhost",
    dialect: "mysql",
  });
}
module.exports = {crearConfigBaseDades}
