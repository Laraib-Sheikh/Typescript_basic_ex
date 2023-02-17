const age: number = 20; // set the age variable to 20

if (age < 2) {
  console.log("This person is a baby.");
} else if (age >= 2 && age < 4) {
  console.log("This person is a toddler.");
} else if (age >= 4 && age < 13) {
  console.log("This person is a kid.");
} else if (age >= 13 && age < 20) {
  console.log("This person is a teenager.");
} else if (age >= 20 && age < 65) {
  console.log("This person is an adult.");
} else {
  console.log("This person is an elder.");
}
