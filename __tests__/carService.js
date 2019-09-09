const carService = require('../modules/carService');
const knex = require('../knexFile');

jest.mock('../knexFile', () => ({}));

describe('carService', () => {
  describe('#getCarById()', () => {
    test('validates the parameter of select, from and where', async () => {
      const whereMock = jest.fn(async () => 'car object');
      const fromMock = jest.fn(() => ({
        where: whereMock,
      }));
      const selectMock = jest.fn(() => ({from: fromMock}));
      knex.select = selectMock;

      const car = await carService.getCarById(1);

      expect(selectMock).toHaveBeenCalledWith();
      expect(fromMock).toHaveBeenCalledWith('cars');
      expect(whereMock).toHaveBeenCalledWith({id: 1});
      expect(car).toBe('car object');

      delete knex.select;
    });
  });
});
