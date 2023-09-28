const { DataTypes, Model } = require("sequelize");

const sequelize = require("../config/connection");

class Reviews extends Model {}

Reviews.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    game_title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "reviews",
  }
);

module.exports = Reviews;
