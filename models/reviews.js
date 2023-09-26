const { DataTypes, Model } = require("sequelize");

class Reviews extends Model {}

Reviews.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
});
