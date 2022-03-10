
const pathModule = require('d3-path');
const PRECISION = 2;

pathModule.path.prototype.toString = function() {
    // Ref: https://github.com/d3/d3-path/issues/10
    //
    return this._.replace(/\d+\.\d+/g, s => parseFloat(s).toFixed(PRECISION));
};

module.exports = pathModule;
