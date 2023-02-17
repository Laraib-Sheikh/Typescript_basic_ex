function createCar(manufacturer: string, modelName: string, ...options: [string, any][]): Record<string, any> {
    const car = { manufacturer, modelName, options: {} };
    options.forEach(([key, value]) => car.options[key] = value);
    return car;
  }
  const car = createCar("Tesla", "Model S", color: "red", autopilot: true);
  console.log(car);
    