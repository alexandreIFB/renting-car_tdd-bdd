const BaseRepository = require("../repository/base/baseRepository");

class CarService {

  constructor({ cars }) {
    this.carRepository = new BaseRepository({ file: cars })
  }

  getAvailableCar(carCategory) {
   const carId = this.chooseRandomCarId(carCategory)

   return this.carRepository.find(carId);
  }

  getRandomPositionFromArray(list) {
    return Math.floor((list.length) * Math.random());
  }

  chooseRandomCarId(carCategory) {
    const randomCarIndex = this.getRandomPositionFromArray(carCategory.carIds);

    const carId = carCategory.carIds[randomCarIndex]

    return carId;
  }
}


module.exports = CarService