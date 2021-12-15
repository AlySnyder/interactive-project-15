const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Covid2020 extends Model {}

Covid2020.init(
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
    cases: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    deaths: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    recoveries: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'covid2020',
  }
);

module.exports = Covid2020;
