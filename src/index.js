import uniqueRandomArray from 'unique-random-array'
const tangoNames = require('./tango-names.json')

const mainExport = {
  all: tangoNames,
  random: uniqueRandomArray(tangoNames),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
