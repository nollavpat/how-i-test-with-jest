const knexFile = require('./knexFile');
const knex = require('knex'); // this is a function

// NODE_ENV=test, read data from test.env

jest.mock('knex', () => jest.fn(() => 'dbObject'));

describe('knex', () => {
  test('have the correct parameters found from a env file', () => {
    expect(knexFile).toBe('dbObject');
    expect(knex).toHaveBeenCalledWith({
      client: 'mysql',
      connection: {
        host: '127.0.0.1',
        user: 'your_database_user',
        password: 'your_database_password',
        database: 'myapp_test',
      },
    });
    expect(knex).toHaveBeenCalledTimes(1);
  });
});
