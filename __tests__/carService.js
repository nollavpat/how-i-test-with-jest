const carService = require('../modules/carService');
const knex = require('../knexFile');

jest.mock('../knexFile', () => ({}));

describe('carService', () => {
  describe('#getCarById()', () => {
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

      delete knex.select;
    });
  });
});
