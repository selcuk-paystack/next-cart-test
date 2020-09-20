import faker from 'faker';

export default (req, res) => {
  const product = {
    id: Math.floor(Math.random() * 10000) + 1,
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

  res.status(200).json(product);
};
