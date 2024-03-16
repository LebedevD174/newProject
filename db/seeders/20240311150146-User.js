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
    await queryInterface.bulkInsert('Users', [
      {
      name: 'John',
      lastName: 'Doe',
      age: 25,
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        name: 'Jooo',
        lastName: 'Woo',
        age: 15,
        createdAt: new Date(),
      updatedAt: new Date(),
        },
        {
          name: 'Joh',
          lastName: 'Dew',
          age: 20,
          createdAt: new Date(),
      updatedAt: new Date(),
          },
          {
            name: 'Ohjo',
            lastName: 'Ode',
            age: 35,
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
    await queryInterface.bulkDelete('Users', null, {});
  }
};
