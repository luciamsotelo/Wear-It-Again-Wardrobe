'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('items', [
      {
        name: 'shirt',
        zipcode: 92109,
        description: 'Blue White Stripe Long Sleeved Shirt',
        price: 30,
        image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D',
      },
      {
        name: 'shirt',
        zipcode: 67890,
        description: 'White V-Neck Long Sleeve Shirt',
        price: 99,
        image: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcnRzJTIwd29tZW58ZW58MHx8MHx8fDA%3D',
      },
      {
        name: 'Pants',
        zipcode: 11223,
        description: 'Blue Denim Regular Length Pants',
        price: 80,
        image: 'https://images.unsplash.com/photo-1541840031508-326b77c9a17e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFudHMlMjBtZW58ZW58MHx8MHx8fDA%3D',
      },
      {
        name: 'Pants',
        zipcode: 44556,
        description: 'Pink Cotton Pants with Front Pockets.',
        price: 75,
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFudHN8ZW58MHx8MHx8fDA%3D',
      },
      {
        name: 'Pants',
        zipcode: 78901,
        description: 'Black Cotton Pants with Front Pockets.',
        price: 300,
        image: 'https://images.unsplash.com/photo-1584865288642-42078afe6942?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFudHMlMjBtZW58ZW58MHx8MHx8fDA%3D',
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('items', null, {});
  }
};
