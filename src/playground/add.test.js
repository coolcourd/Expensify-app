const add = (a,b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`

test('should add 2 numbers', () => {
  const result = add(3,4);
  expect(result).toBe(7);
});

test('should insert a name', () => {
  const result = generateGreeting('Courd');
  expect(result).toBe("Hello Courd!");
});

test('should insert Anonymous', () => {
  const result = generateGreeting();
  expect(result).toBe("Hello Anonymous!");
});
