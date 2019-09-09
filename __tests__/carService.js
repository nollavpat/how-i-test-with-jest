const carService = require('../modules/carService');
const knex = require('../knexFile');

jest.mock('../knexFile', () => jest.fn());

describe('carService', () => {
  describe('#getCarById()', () => {
    beforeEach(() => {
      console.log('pre', knex());
      knex.mockImplementation(() => ({}));
      console.log('post', knex());
    });

    afterEach(() => {
      knex.mockRestore();
      console.log('post', knex.select.mock.calls);
    });

    test('validates the parameter of select, from and where', async () => {
      const whereStub = jest.fn(async () => 'car object');
      const fromStub = jest.fn(() => ({
        where: whereStub,
      }));
      const selectStub = jest.fn(() => ({from: fromStub}));
      knex.select = selectStub;

      const car = await carService.getCarById(1);

      expect(selectStub).toHaveBeenCalledWith();
      expect(fromStub).toHaveBeenCalledWith('cars');
      expect(whereStub).toHaveBeenCalledWith({id: 1});
      expect(car).toBe('car object');
    });
  });

  describe('... remaining crud functions', () => {
    test('just printing', async () => {
      const car = await carService.getCarById(1);
      console.log(car, 'dasds');
    });
  });
});
