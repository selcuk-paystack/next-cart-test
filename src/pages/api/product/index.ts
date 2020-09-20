import faker from 'faker';

export default (req, res) => {
  const limit = 150;
  const products = [];

  for (let index = 0; index < limit; index++) {
    const product = {
      id: index,
      name: faker.commerce.productName(),
      category: faker.commerce.department(),
      createdDate: faker.date.past(),
      description: faker.lorem.paragraph(Math.floor(Math.random() * 6) + 1),
      department: faker.commerce.department(),
      price: Number(faker.commerce.price()),
      adjective: faker.commerce.productAdjective(),
      material: faker.commerce.productMaterial(),
      media: faker.image.image(),
    };

    products.push(product);
  }

  res.status(200).json(products);
};
