const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Aboutme extends Model {}

Aboutme.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    about_me: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelname: "aboutme",
  }
);

module.exports = Aboutme;
