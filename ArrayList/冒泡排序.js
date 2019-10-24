

// 排序的本质是比较和交换

var arr = [4, 1, 6, 9, 3, 2, 8, 7]
function compare(a, b) { // arr.sort()方法中传入的函数就是compare函数
    if (a > b) return true
    else return false
}
function exchange(arr, curIndex, nextIndex) {
    var temp = arr[curIndex];
    arr[curIndex] = arr[nextIndex];
    arr[nextIndex] = temp;
}
function BubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (compare(arr[j], arr[j + 1])) {
                exchange(arr, j, j + 1)
            }
        }
    }
}
BubbleSort(arr);
console.log(arr);//[ 1, 2, 3, 4, 6, 7, 8, 9 ]
