const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class States extends Model {}

States.init(
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
    covid_data_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'covid',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'states',
  }
);

module.exports = States;