const regex = /^\+\d{2,3}-\d{3}-\d{3}-\d{3}$/;
console.log(regex.test('+34-456-789-012')); // true
console.log(regex.test('123-456-7890')); // false
clear