/**
 *
 * @param n
 * @returns {number}
 * @constructor
 */
function Fibonacci(n) { // 动态规划思想
    if(n <= 0) return -1;
    if(n === 1) return 0;
    if(n === 2) return 1;
    return Fibonacci(n - 1) + Fibonacci( n -2);
}
console.log(Fibonacci(10))
// f(n) = f(n-1) + f(n-2) 只考虑当前的状态是怎么来了，至于下一个状态丢给递归

/**
 *
 * @param n
 * @returns {string|number}
 * @constructor
 */
function Fibonacci2(n) { // 常规解法
    if(n <= 0) return -1;
    if(n === 1) return 0;
    if(n === 2) return 1;
    let a = 0;
    let b = 1;
    let c = '';
    for(let i = 3; i <= n ; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}

console.log(Fibonacci2(10))
