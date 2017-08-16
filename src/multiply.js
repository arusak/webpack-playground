var add = require('./add');

module.exports = function multiply(n, p) {
    var result = 0;
    for (var i = 0; i < p; i++) {
        add(result, n);
    }
    return result;
};