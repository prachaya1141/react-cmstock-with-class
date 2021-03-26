const Sequelize =require("sequelize")
const sequelize = require("../db_instance")

const user = sequelize.define(
    "user",{
        name:{type:Sequelize.STRING,allowNull:false},
        username:{type:Sequelize.STRING,allowNull:false,primaryKey:true},
        password:{type:Sequelize.STRING,allowNull:false},
        level:{type:Sequelize.STRING,defaultValue:"level"}
    },{
        //option
    }
);

(async()=>{
    await user.sync({force:false})
})();
module.exports = user;