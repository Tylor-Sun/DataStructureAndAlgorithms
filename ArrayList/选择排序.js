//选择排序本质是每一次内层循环选出一个最大/最小的数值并将其放到数组的最后一位
var arr = [4, 1, 6, 9, 3, 2, 8, 7]

function compare(a, b) {
    if (a > b) return true
    else return false
}

function exchange(arr, curIndex, nextIndex) {
    var temp = arr[curIndex];
    arr[curIndex] = arr[nextIndex];
    arr[nextIndex] = temp;
}

function SelectSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var index = 0;
        for (var j = 0; j < arr.length - i; j++) {
            if (!compare(arr[index], arr[j])) {
                index = j;
            }
        }
        exchange(arr, index, arr.length - 1 - i);// 第一次放到最后一位、第二次倒数第二位...
    }
}

SelectSort(arr);
console.log(arr) // [ 1, 3, 2, 4, 6, 8, 7, 9 ]
