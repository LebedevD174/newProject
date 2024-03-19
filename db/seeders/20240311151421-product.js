/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const veg = [
      {
        name: 'Огурцы',
      },
      {
        name: 'Помидоры',
      },
      {
        name: 'Картофель',
      },
      {
        name: 'Лук',
      },
      {
        name: 'Редис',
      },
    ].map((el, i) => ({
      ...el,
      price: i + 2,
      category_id: 1,
    }));
    const fruit = [
      {
        name: 'Яблоки',
      },
      {
        name: 'Груши',
      },
      {
        name: 'Апельсины',
      },
      {
        name: 'Мандарины',
      },
      {
        name: 'Манго',
      },
    ].map((el, i) => ({
      ...el,
      price: i + 2 + 0.1 * i,
      category_id: 2,
    }));
    const meat = [
      {
        name: 'Говядина',
      },
      {
        name: 'Свинина',
      },
      {
        name: 'Ребрышки',
      },
    ].map((el, i) => ({
      ...el,
      price: i + 10 + 0.2 * i,
      category_id: 3,
    }));
    const poultry = [
      {
        name: 'Курица',
      },
      {
        name: 'Индейка',
      },
      {
        name: 'Утка',
      },
    ].map((el, i) => ({
      ...el,
      price: i + 5 + 0.2 * i,
      category_id: 4,
    }));
    const other = [
      {
        name: 'Фарш',
      },
      {
        name: 'Котлеты',
      },
      {
        name: 'Пельмени',
      },
    ].map((el, i) => ({
      ...el,
      price: i + 10 + 0.15 * i,
      category_id: 5,
    }));

    await queryInterface.bulkInsert('Products', [
      ...veg,
      ...fruit,
      ...meat,
      ...poultry,
      ...other,
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
    await queryInterface.bulkDelete('Products', null, {});
  },
};
