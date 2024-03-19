const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ Category, Order_line }) {
      // define association here
      this.belongsTo(Category, { foreignKey: 'category_id' });
      this.hasMany(Order_line, { foreignKey: 'prod_id' });
    }
  }
  Product.init({
    name: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
