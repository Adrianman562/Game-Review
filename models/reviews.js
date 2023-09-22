const {MODEL, DataTypes, Model}= require("sequelize");
const sequelize = require("../config/connection");

class Reviews extends Model{};

Reviews.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
        },
        
    }
)