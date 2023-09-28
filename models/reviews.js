const { DataTypes, Model } = require("sequelize");

class Reviews extends Model {}

Reviews.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  game_title:{
    type: DataTypes.STRING,


  },
  content:{
    type:DataTypes.INTEGER,
    allowNull:false,
  },
  rating:{
    type:DataTypes.INTEGER,

  },
  user_id:{
    references:
  },


});