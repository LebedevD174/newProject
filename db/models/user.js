'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Basket}) {
      // define association here
      this.hasOne(Basket, { foreignKey: 'user_id' });
    }
  }
  User.init({
    login: DataTypes.TEXT,
    name: DataTypes.TEXT,
    password: DataTypes.TEXT,
    email: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};