'use strict';

var assert = require('chai').assert;
var ndarray = require('ndarray');

var percentiles = require('../');

describe('ndarray-percentiles', function () {
  it('1d', function () {
    var A = ndarray([1, 2, 3, 4, 5, 6], [6]);
    var r = percentiles(A);

    assert.equal(r['0'], 1);
    assert.equal(r['0.25'], 2);
    assert.equal(r['0.5'], 3);
    assert.equal(r['0.75'], 4);
    assert.equal(r['1'], 6);
  });

  it('2d', function () {
    var A = ndarray([1, 2, 3, 4, 5, 6], [3, 2]);
    var r = percentiles(A, [0.25, 0.50, 0.75]);

    assert.equal(r.length, 2);

    assert.isUndefined(r[0]['0']);
    assert.equal(r[0]['0.25'], 1);
    assert.equal(r[0]['0.5'], 3);
    assert.equal(r[0]['0.75'], 3);
    assert.isUndefined(r[0]['1']);

    assert.isUndefined(r[1]['0']);
    assert.equal(r[1]['0.25'], 2);
    assert.equal(r[1]['0.5'], 4);
    assert.equal(r[1]['0.75'], 4);
    assert.isUndefined(r[1]['1']);
  });

  it('3d', function () {
    var A = ndarray([1, 2, 3, 4, 5, 6, 7, 8], [2, 2, 2]);
    assert.throws(function () { percentiles(A); });
  });
});
