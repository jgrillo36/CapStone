'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.product_orders.belongsTo(models.products, {foreignKey: 'productId', allowNull: true});
      models.product_orders.belongsTo(models.orders, {foreignKey: 'orderId', allowNull: true});
    }
  };
  product_orders.init({
    productId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product_orders',
  });
  return product_orders;
};