'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Orders', [
      {
         basket_id: 1,
         status: true,
         total_price: 15,
         createdAt: new Date(),
      updatedAt: new Date(),
       },
       {
        basket_id: 1,
        status: true,
        total_price: 20,
        createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        basket_id: 2,
        status: false,
        total_price: 20,
        createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        basket_id: 3,
        status: true,
        total_price: 10,
        
        createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        basket_id: 1,
        status: true,
        total_price: 100,
        createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        basket_id: 4,
        status: false,
        total_price: 15,
        createdAt: new Date(),
      updatedAt: new Date(),
      },
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
