'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [
      {
        name: 'Women\'s Crop Street T',
        price: 30.00,
        size: 'XS/S/M/L',
        description: 'Sustainably Made - 100% Organic Cotton. Fabrics are knitted and dyed in Los Angeles.Fabric travels less than 5 miles for production of the goods. G.O.T.S Certified.  *Orders shipped outside of the United States may be subject to import taxes, customs duties, and fees levied by the destination country/region.',
        image: "https://cdn.shopify.com/s/files/1/0537/4571/3346/products/FiskerCropTop_1100x.jpg?v=1624468416",
        createdAt: new Date(),
        updatedAt: new Date() 
        },
      {
        name: 'Eco-Friendly Street Crewneck',
        price: 89.00,
        size: 'S/M/L/XL',
        description: '100% Recycled Cotton. 99.5% Biodegradable 14 oz 100% Recycled Cotton Fleece.Made from reclaimed US-grown cotton manufacturing waste. Made in Los Angeles, California. G.O.T.S Certified. Circular Manufacturer. Closed Loop Factory. *Orders shipped outside of the United States may be subject to import taxes, customs duties, and fees levied by the destination country/region.',
        image: "https://cdn.shopify.com/s/files/1/0537/4571/3346/products/Crewneck_1100x.jpg?v=1624467628",
        createdAt: new Date(),
        updatedAt: new Date() 
        },
      {
        name: 'Eco-Friendly Street Sweatpants',
        price: 89.00,
        size: 'S/M/L/XL/XXL',
        description: '100% Recycled Cotton. 99.5% Biodegradable 14 oz 100% Recycled Cotton Fleece.Made from reclaimed US-grown cotton manufacturing waste. Made in Los Angeles, California. G.O.T.S Certified. Circular Manufacturer. Closed Loop Factory. *Orders shipped outside of the United States may be subject to import taxes, customs duties, and fees levied by the destination country/region.',
        image: "https://cdn.shopify.com/s/files/1/0537/4571/3346/products/Sweatpants_1100x.jpg?v=1624468034",
        createdAt: new Date(),
        updatedAt: new Date() 
        },
      {
        name: 'Sustainable Fisker Face Mask',
        price: 14.00,
        size: 'S/L',
        description: '100% Combed Organic Cotton. Reusable, washable, breathable. Made in Los Angeles California. Platinum W.R.A.P certified facility. Eco-Friendly Manufacturing Processes. *Orders shipped outside of the United States may be subject to import taxes, customs duties, and fees levied by the destination country/region.',
        image: "https://cdn.shopify.com/s/files/1/0537/4571/3346/products/FiskerMask.2_1100x.jpg?v=1624468709",
        createdAt: new Date(),
        updatedAt: new Date() 
        },
      {
        name: 'First Edition Solar T-Shirt',
        price: 36.00,
        size: 'S/M/L/XL',
        description: 'Made from all-recycled materials, including recovered plastic water bottles woven into yarn. *Orders shipped outside of the United States may be subject to import taxes, customs duties, and fees levied by the destination country/region.',
        image: "https://cdn.shopify.com/s/files/1/0537/4571/3346/products/FiskerT-shirt_1100x.jpg?v=1624637185",
        createdAt: new Date(),
        updatedAt: new Date() 
        },
      {
        name: "Women's Fitted Street T",
        price: 32.00,
        size: 'S/M/L/XL',
        description: 'Sustainably Made – 100% Organic Cotton. Fabrics are knitted and dyed in Los Angeles.Fabric travels less than 5 miles for production of the goods. G.O.T.S Certified.  *Orders shipped outside of the United States may be subject to import taxes, customs duties, and fees levied by the destination country/region.',
        image: "https://cdn.shopify.com/s/files/1/0537/4571/3346/products/FiskerWomensT-Shirt_1100x.jpg?v=1624468503",
        createdAt: new Date(),
        updatedAt: new Date() 
        },
      {
        name: 'Eco-Friendly Street Hoodie',
        price: 92.00,
        size: 'S/M/L/XL',
        description: '100% Recycled Cotton. 99.5% Biodegradable 14 oz 100% Recycled Cotton Fleece.Made from reclaimed US-grown cotton manufacturing waste. Made in Los Angeles, California. G.O.T.S Certified. Circular Manufacturer. Closed Loop Factory.  *Orders shipped outside of the United States may be subject to import taxes, customs duties, and fees levied by the destination country/region.',
        image: "https://cdn.shopify.com/s/files/1/0537/4571/3346/products/Sweatshirt_24a78e59-dafe-4c69-8aa3-8afa513d55d6_1100x.jpg?v=1624571784",
        createdAt: new Date(),
        updatedAt: new Date() 
        },
      {
        name: 'Organic Fisker Hat',
        price: 38.00,
        size: 'One size fits all',
        description:'Embroidered logo, 100% Organic Cotton Twill. Made in U.S.A. Locally Grown, Fairly Traded, Union Made, Sweatshop Free. All employees represented by Workers United.  *Orders shipped outside of the United States may be subject to import taxes, customs duties, and fees levied by the destination country/region.',
        image: "https://cdn.shopify.com/s/files/1/0537/4571/3346/products/FiskerHat_1100x.jpg?v=1624469270",
        createdAt: new Date(),
        updatedAt: new Date() 
        },
      ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  }
};