const add = (a, b) => a + b;
const generateGreeting =(name = 'Anonymous') => `Hello ${name}!`;

test('Should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
    // if (result !== 7) {
    //     throw new Error(`You added 4 and 3. The result was ${result}. Expect 7`);
//     }
});

test('Should generate greeting from name', () => {
   const result = generateGreeting('Mike');
   expect(result).toBe('Hello Mike!');
});

test('Should generate greeting for no name', () => {
   const result = generateGreeting();
   expect(result).toBe = generateGreeting('Hello Anonymous!')
});