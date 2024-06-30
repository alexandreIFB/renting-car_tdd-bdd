const BaseRepository = require("../repository/base/baseRepository");

class CarService {

  constructor({ cars }) {
    this.carRepository = new BaseRepository({ file: cars })
  }

  getAvailableCar(data) {
    return null
  }

  getRandomPositionFromArray(data) {
    return Math.floor((data.length) * Math.random());
  }

  chooseRandomCarId(carCategory) {
    const randomCarIndex = this.getRandomPositionFromArray(carCategory.carIds);

    const carId = carCategory.carIds[randomCarIndex]

    return carId;
  }
}


module.exports = CarService