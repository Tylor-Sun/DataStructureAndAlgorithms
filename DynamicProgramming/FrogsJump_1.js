
// 一次只能跳一个台阶，有多少种跳法跳上第n节台阶

// 如果这只青蛙跳到了第n阶台阶，那么它一定在第n-1阶台阶上或者在第n-2阶台阶上
// 那么跳到第n阶的问题就变成了两个子问题
// 跳上第n-1阶台阶的跳法加上跳上n-2阶台阶的跳法

/**
 *
 * @constructor
 */
function Jump(n) {
    if(n <= 0) return -1;
    if(n === 1) return 1;
    if(n === 2) return 2;
    return Jump(n - 1) + Jump(n - 2)
}
