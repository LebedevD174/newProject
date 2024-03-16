'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Category, Order_line}) {
      // define association here
      this.belongsTo(Category, { foreignKey: 'category_id' });
      this.hasMany(Order_line, { foreignKey: 'prod_id' });
    }
  }
  Product.init({
    name: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};