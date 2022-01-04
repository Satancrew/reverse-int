module.exports = function reverse (n) {
    let arrayN = String(Math.abs(n)).split('');
    return Number(arrayN.reverse().join(''));
}
