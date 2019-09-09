const knex = require('../knexFile');

const getCarById = async (id) => {
  return knex
      .select()
      .from('cars')
      .where({id});
};

module.exports = {getCarById};
