# ndarray-percentiles

Calculates percentiles for an [ndarray](https://github.com/scijs/ndarray).

Only works with 1 or 2 dimensional arrays and aggregates by column.

# Examples

## 1 Dimension

```javascript
var ndarray = require('ndarray');
var ndarrayPercentiles = require('ndarray-percentiles');

var A = ndarray([1, 2, 3, 4, 5, 6], [6]);
var r = ndarrayPercentiles(A, [0.25, 0.5, 0.75]); 

// r is now an object with percentile values
//
// r = {
//   '0.25': 2,
//   '0.5': 3,
//   '0.75': 4
// }
```

## 2 Dimensions

```javascript
var ndarray = require('ndarray');
var ndarrayPercentiles = require('ndarray-percentiles');

var A = ndarray([1, 2, 3, 4, 5, 6], [3, 2]);
var r = ndarrayPercentiles(A); // default second param is [0, 0.25, 0.5, 0.75, 1] 

// r is now an array of objects with percentile values
//
// r[0] = {
//   '0': 1,
//   '0.25': 1,
//   '0.5': 3,
//   '0.75': 3,
//   '1': 5
// }
```

# Install

    npm install ndarray-percentiles

# Credits
(c) 2016 Foy Savas. MIT License
