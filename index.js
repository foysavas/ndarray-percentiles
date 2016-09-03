'use strict';

module.exports = ndarrayPercentiles;

var ndarraySelect = require('ndarray-select');
var ndarrayScratch = require('ndarray-scratch');

function calcPercentiles1d (nd0, percentiles) {
  var r = {};
  var nd = ndarrayScratch.clone(nd0);
  var rows = nd.shape[0];
  for (let perc of percentiles) {
    let ind = Math.trunc((rows - 1) * perc);
    if (ind > rows) {
      ind = rows - 1;
    } else if (ind < 0) {
      ind = 0;
    }
    r[perc] = ndarraySelect(nd, ind).get();
  }
  ndarrayScratch.free(nd);
  return r;
}

function calcPercentiles2d (nd0, percentiles) {
  var r = [];
  var nd = ndarrayScratch.clone(nd0);
  var rows = nd.shape[0];
  var cols = nd.shape[1];
  for (let coli = 0; coli < cols; coli++) {
    r[coli] = {};
    var ndcol = nd.pick(null, coli);
    for (let perc of percentiles) {
      let ind = Math.trunc((rows - 1) * perc);
      if (ind > rows) {
        ind = rows - 1;
      } else if (ind < 0) {
        ind = 0;
      }
      r[coli][perc] = ndarraySelect(ndcol, ind).get();
    }
  }
  ndarrayScratch.free(nd);
  return r;
}

function ndarrayPercentiles (nd0, percentiles = [0, 0.25, 0.5, 0.75, 1]) {
  var dim = nd0.shape.length;
  if (dim === 1) {
    return calcPercentiles1d(nd0, percentiles);
  } else if (dim === 2) {
    return calcPercentiles2d(nd0, percentiles);
  } else {
    throw new Error('ndarray-percentiles only accepts ndarrays of dim 1 or 2');
  }
}
