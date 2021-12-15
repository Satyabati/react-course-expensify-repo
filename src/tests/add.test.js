const add = (a,b) => a+b+1;
const generateGreeting = (name)=> `Hello ${name}!`

test('Should add two numbers',() =>{
  const result =add(3,4);
  expect(result).toBe(8);
});

test('Should return proper greetings',() =>{
    const greetings =generateGreeting('Satya');
    expect(greetings).toMatch('Hello Satya');
  });