'use strict'

module.exports = function(like) {
  if (typeof like !== 'string') {
    return /(?!.*)/
  }

  var regexp = ('^' + like + '$').replace(/%/g, '.*').replace(/_/g, '.')

  return new RegExp(regexp, 'i')
}
