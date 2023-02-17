function orderSandwich(...items: string[]): void {
    console.log(`You ordered a sandwich with ${items.join(", ")}.`);
  }

 orderSandwich("turkey", "lettuce", "tomato", "mayo");

orderSandwich("ham", "cheese");

orderSandwich("peanut butter", "jelly");
