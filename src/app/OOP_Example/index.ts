class Car {
  // Інкапсуляція 
  protected brand: string; // brand доступна лише в класі Car та класах якій його наслідують
  private features: string[]; // features доступна лише в класі Car

  constructor(brand: string) {
    this.brand = brand;
    this.features = [];
  }

  startEngine(): string {
    return `Автомобіль марки ${this.brand} запустив двигун.`;
  }

  addFeature(feature: string): void {
    this.features.push(feature);
  }

  showFeatures(): string {
    return `Особливості цього автомобіля: ${this.features.join(', ')}`;
  }
}

// Наслідування, ключове слово **extends**
class LuxuryCar extends Car {
  constructor(brand: string) {
    super(brand);
  }

  // Поліморфізм (перезапис методу батьківського класу)
  override startEngine(): string {
    return `Розкішний автомобіль марки ${this.brand} запустив двигун. Насолоджуйтесь комфортом!`;
  }
}

class ElectricCar extends Car {
  constructor(brand: string) {
    super(brand);
  }

  override startEngine(): string {
    return `Електромобіль марки ${this.brand} запустив двигун. Без шуму та викидів!`;
  }
}

class SportsCar extends Car {
  constructor(brand: string) {
    super(brand);
  }

  override startEngine(): string {
    return `Спортивний автомобіль марки ${this.brand} запустив двигун. Готуйся до швидкості!`;
  }
}

let tesla = new ElectricCar('Tesla');
let ferrari = new SportsCar('Ferrari');
let rollsRoyce = new LuxuryCar('Rolls-Royce');
rollsRoyce.addFeature('Панорамний дах');
rollsRoyce.addFeature('Масажні сидіння');

console.log(rollsRoyce.startEngine()); // Виведе: "Розкішний автомобіль марки Rolls-Royce запустив двигун. Насолоджуйтесь комфортом!"
console.log(rollsRoyce.showFeatures()); // Виведе: "Особливості цього автомобіля: Панорамний дах, Масажні сидіння"
console.log(tesla.startEngine()); // Виведе: "Електромобіль марки Tesla запустив двигун. Без шуму та викидів!"
console.log(ferrari.startEngine()); // Виведе: "Спортивний автомобіль марки Ferrari запустив двигун. Готуйся до швидкості!"
