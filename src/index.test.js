import {expect} from 'chai'
import tangoNames from '.'

describe('starwars-names', () => {
  it('should have a list of all available names', () => {
    expect(tangoNames.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', () => {
    expect(tangoNames.random()).to.satisfy(isIncludedIn(tangoNames.all))
  })
})

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
  return item => array.includes(item)
}
