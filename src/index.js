module.exports = function reverse (n) {
    return Number(Math.abs(n).toString().split('').map((value, index, array)=>array[array.length -1 -index ]).join(''))
}
