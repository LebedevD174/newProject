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
    await queryInterface.bulkInsert('Products', [
      {
         name: 'Пиво',
         price: 1,
         category_id: 1,
         createdAt: new Date(),
      updatedAt: new Date(),
       },
       {
        name: 'Водка',
        price: 3,
        category_id: 1,
        createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        name: 'Виски',
        price: 5,
        category_id: 1,
        createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        name: 'Не пиво',
        price: 10,
        category_id: 2,
        createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        name: 'Не водка',
        price: 15,
        category_id: 2,
        createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        name: 'Не виски',
        price: 20,
        category_id: 2,
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
    await queryInterface.bulkDelete('Products', null, {});
  }
};
