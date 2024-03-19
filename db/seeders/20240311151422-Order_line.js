/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Order_lines', [
      {
        prod_id: 1,
        order_id: 1,
        count: 1,
      },
      {
        prod_id: 2,
        order_id: 1,
        count: 3,
      },
      {
        prod_id: 1,
        order_id: 2,
        count: 14,
      },
      {
        prod_id: 3,
        order_id: 2,
        count: 1,
      },
      {
        prod_id: 1,
        order_id: 3,
        count: 3,
      },
      {
        prod_id: 4,
        order_id: 4,
        count: 12,
      },
      {
        prod_id: 2,
        order_id: 4,
        count: 2,
      },
    ].map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    })), {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Order_lines', null, {});
  },
};
