const Sequelize =require("sequelize")
const sequelize = require("../db_instance")

const product = sequelize.define(
    "product",{
        name:{type:Sequelize.STRING,allowNull:false},
        image:{type:Sequelize.STRING,allowNull:false,defaultValue:"-"},
        price:{type:Sequelize.NUMBER},
        stock:{type:Sequelize.NUMBER}
    },{
        //option
    }
);

(async()=>{
    await product.sync({force:false})
})();
module.exports = product;