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
    covid_2020_data: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'Covid2020',
          key: 'id'
      }
    },
    covid_2021_data: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Covid2021',
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