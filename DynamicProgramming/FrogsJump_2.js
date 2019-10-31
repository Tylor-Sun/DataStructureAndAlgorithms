
// n级台阶，第一步有n种跳法：跳1级、跳2级、到跳n级
// f(n) = f(n - 1) + f(n -2) + f(n - 3) + ... + f(1)
// f(n - 1) = f(n -2) + f(n - 3) + ... + f(1)
// f(n) = 2 * f(n - 1)
/**
 *
 * @param n
 * @returns {number}
 * @constructor
 */
function Jump(n) {
    if(n < 1) return 0;
    if(n === 1) return 1;
    return 2 * Jump(n - 1);
}

console.log(Jump(10))

// n  = 3;
// 111 , 12 , 21, 3