'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('items', [
      {
        name: 'Sample Item 1',
        zipcode: 12345,
        description: 'This is a description for Sample Item 1.',
        price: 100,
        image: 'sample1.jpg',
      },
      {
        name: 'Sample Item 2',
        zipcode: 67890,
        description: 'This is a description for Sample Item 2.',
        price: 150,
        image: 'sample2.jpg',
      },
      {
        name: 'Sample Item 3',
        zipcode: 11223,
        description: 'This is a description for Sample Item 3.',
        price: 200,
        image: 'sample3.jpg',
      },
      {
        name: 'Sample Item 4',
        zipcode: 44556,
        description: 'This is a description for Sample Item 4.',
        price: 250,
        image: 'sample4.jpg',
      },
      {
        name: 'Sample Item 5',
        zipcode: 78901,
        description: 'This is a description for Sample Item 5.',
        price: 300,
        image: 'sample5.jpg',
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('items', null, {});
  }
};
