'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_line extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Product, Order}) {
      // define association here
      this.belongsTo(Product, { foreignKey: 'prod_id' });
      this.belongsTo(Order, { foreignKey: 'order_id' });
    }
  }
  Order_line.init({
    prod_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
    count: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order_line',
  });
  return Order_line;
};