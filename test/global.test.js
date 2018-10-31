const toRegExp = require('../index.js')

const tests = [
  {
    likeQuery: '%ipsum%',
    regexp: /^.*ipsum.*$/i,
    match: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Lorem Ipsum dolor sit amet, consectetur adipiscing elit.',
    ],
    notMatch: [
      'Suspendisse potenti. Suspendisse pretium nunc urna, in volutpat velit hendrerit eu.',
      null,
    ],
  },
  {
    likeQuery: 'Lorem%',
    regexp: /^Lorem.*$/i,
    match: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ],
    notMatch: [
      'Suspendisse potenti. Suspendisse pretium nunc urna, in volutpat velit hendrerit eu.',
      'Vestibulum eget felis commodo, gravida velit nec, congue lorem.',
      'Integer accumsan tincidunt velit, eu fermentum lorem mollis at.',
      null,
    ],
  },
  {
    likeQuery: '%Lorem',
    regexp: /^.*Lorem$/i,
    match: [
      'Vestibulum eget felis commodo, gravida velit nec, congue lorem',
      'Vestibulum eget felis commodo, gravida velit nec, congue Lorem',
    ],
    notMatch: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Vestibulum eget felis commodo, gravida velit nec, congue lorem.',
      'Integer accumsan tincidunt velit, eu fermentum lorem mollis at.',
      null,
    ],
  },
  {
    likeQuery: 'l_rem%e_it%',
    regexp: /^l.rem.*e.it.*$/i,
    match: [
      'Lorem Ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem Ipsum dolor sit amet, consectetur adipiscing elit.',
      'Larem Ipsum dolor sit amet, consectetur adipiscing epit.',
    ],
    notMatch: [
      'Lorem Ipsum dolor sit amet,',
      'Vestibulum eget felis commodo, gravida velit nec, congue lorem',
      'Vestibulum eget felis commodo, gravida velit nec, congue lorem.',
      'Integer accumsan tincidunt velit, eu fermentum lorem mollis at.',
      'consectetur adipiscing elit.',
      null,
    ],
  },
  {
    likeQuery: '_ore_',
    regexp: /^.ore.$/i,
    match: [
      'Lorem',
      'poret',
    ],
    notMatch: [
      'Lorem Ipsum dolor sit amet,',
      'Vestibulum eget felis commodo, gravida velit nec, congue lorem',
      'Vestibulum eget felis commodo, gravida velit nec, congue lorem.',
      'Integer accumsan tincidunt velit, eu fermentum lorem mollis at.',
      'consectetur adipiscing elit.',
      null,
    ],
  },
  {
    likeQuery: null,
    regexp: /(?!.*)/,
    match: [],
    notMatch: [
      'Suspendisse potenti. Suspendisse pretium nunc urna, in volutpat velit hendrerit eu.',
      null,
    ],
  },
]

describe('global', () => {
  tests.forEach(test => {
    it(`generate valid regexp for query ${test.likeQuery}`, () => {
      const generated = toRegExp(test.likeQuery)
      const stringValue = generated.toString()

      const toBe = test.regexp.toString()

      expect(stringValue).toBe(toBe)
    })

    it(`all match pass for query ${test.likeQuery}`, () => {
      const generated = toRegExp(test.likeQuery)

      test.match.forEach(match => {
        expect(generated.test(match)).toBeTruthy()
      })
    })

    it(`all not match pass for query ${test.likeQuery}`, () => {
      const generated = toRegExp(test.likeQuery)

      test.notMatch.forEach(notMatch => {
        expect(generated.test(notMatch)).toBeFalsy()
      })
    })
  })
})
