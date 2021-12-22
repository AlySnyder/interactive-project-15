const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Favorites extends Model {}

Favorites.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    fav_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fav_pop: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate : {
        isNumeric: true
      }
    },
    fav_case: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate : {
        isNumeric: true
      }
    },
    fav_death: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate : {
        isNumeric: true
      }
    },
  
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'favorites',
  }
);

module.exports = Favorites;
