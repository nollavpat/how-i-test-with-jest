// here are just some of the matchers I commonly used
// complete list: https://jestjs.io/docs/en/expect

describe('Matchers', () => {
  test('1 === 1', () => {
    expect(1).toBe(1);
  });

  test('{a:1} is equal to {a:1}', () => {
    const obj1 = {a: 1};
    const obj2 = {a: 1};

    expect(obj1).toEqual(obj2);
  });

  test('{b:2, a:1} is equal to {a:1, b:2}', () => {
    const obj1 = {b: 2, a: 1};
    const obj2 = {a: 1, b: 2};

    expect(obj1).toEqual(obj2);
    expect(obj1).not.toBe(obj2);
  });

  test('I am part of UBX pogi list', () => {
    const ubxPogiList = ['Jai', 'Gerb'];

    expect(ubxPogiList).toContain('Jai');
    expect(ubxPogiList).not.toContain('Tenten');
  });

  test('Mobile Legends Tournament to be null', () => {
    const mostAwaitedEvent = 'Mobile Legends Tournament';
    const findEvent = (event) => (event === mostAwaitedEvent ? null : event);

    expect(findEvent(mostAwaitedEvent)).toBeNull();
  });

  test('Free lunch to be defined', () => {
    const freeLunch = 'SOMETHING HERE';

    // .not.toBeDefined = .toBeUndefined
    expect(freeLunch).toBeDefined();
  });

  test('You guys are having fun', () => {
    const isAudienceHavingFun = true;

    // .not.toBeTruthy = .toBeFalsy
    expect(isAudienceHavingFun).toBeTruthy();
  });

  test('Throws Syntax Error if parsing a invalid json string', () => {
    const invalidJsonString = '{';
    const parsedString = () => JSON.parse(invalidJsonString);

    expect(parsedString).toThrow();
    expect(parsedString).toThrowError(SyntaxError);
    expect(parsedString).toThrowError(/Unexpected end of JSON input/);
  });
});
