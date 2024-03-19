/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Овощи',
      },
      {
        name: 'Фрукты',
      },
      {
        name: 'Мясо',
      },
      {
        name: 'Птица',
      },
      {
        name: 'Полуфабрикаты',
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
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
