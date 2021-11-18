/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let result = []
    let value=0
    for(let i=0;i<n;i++){
        value^=start+2*i
    }
    return value
};
