const Sequelize  = require('sequelize');
const sequenlize=require('../config/db');
const sellers=sequenlize.define('reviews',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    primaryKey:true,

 },
 name:{
    type:Sequelize.STRING,
    allowNull:false,
 },
 pros:{
    type:Sequelize.STRING,
    allowNull:false,
 },
 cons:{
   type:Sequelize.STRING,
   allowNull:false,
},
rating:{
   type:Sequelize.STRING,
   allowNull:false,
}
}
, {
   timestamps: false, // Disable createdAt and updatedAt columns
 });
    module.exports=sellers;
    