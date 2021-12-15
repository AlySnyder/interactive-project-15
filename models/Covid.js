const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Covid extends Model {}

Covid.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate : {
        isNumeric: true
      }
    },
    cases: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate : {
        isNumeric: true
      }
    },
    deaths: {
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
    modelName: 'covid',
  }
);

module.exports = Covid;
