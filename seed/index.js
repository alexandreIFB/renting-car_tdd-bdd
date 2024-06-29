const { faker } = require('@faker-js/faker');
const Car = require('../src/entities/car');
const Customer = require('../src/entities/customer');
const CarCategory = require('../src/entities/carCategory');

const { join } = require('path')
const { writeFile } = require('fs/promises')

const seederBaseFolder = join(__dirname, '../', 'database')

const ITEMS_AMOUNT = 2;

function createRandomCustomer() {
  return new Customer({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    age: faker.number.int({
      min: 18,
      max: 60
    }),
  })
}

function createRandomCar() {
  const car = new Car({
    id: faker.string.uuid(),
    name: faker.vehicle.model(),
    available: true,
    gasAvailable: true,
    releaseYear: faker.date.past().getFullYear()
  })
  carCategory.carIds.push(car.id)

  return car;
}

const carCategory = new CarCategory({
  id: faker.string.uuid(),
  name: faker.vehicle.type(),
  carIds: [],
  price: faker.number.float({
    min: 20,
    max: 100,
    fractionDigits: 2
  })
})

const cars = faker.helpers.multiple(createRandomCar, {
  count: ITEMS_AMOUNT,
});

const customers = faker.helpers.multiple(createRandomCustomer, {
  count: ITEMS_AMOUNT,
});

const write = (fileName, data) => writeFile(join(seederBaseFolder, fileName), JSON.stringify(data))

async function saveData() {
  await write('cars.json', cars)
  await write('carCategory.json', [carCategory])
  await write('customers.json', customers)

  console.log({ cars, carCategory })
}


saveData();
