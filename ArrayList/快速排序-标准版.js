var arr = [4, 1, 6, 9, 3, 2, 8, 7]
function swap (arr , a, b){
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
function quickSort_2(arr, begin, end){
    if(begin >= end - 1) return ;// 严谨判断：此时为相邻两个数不需要进行排序
    var left = begin;
    var right = end;
    do{
        do left++; while(left < right && arr[left] < arr[begin])// 左指针右移,大于等于基准值跳出等待交换
        do right--; while(right > left && arr[right] > arr[begin])// 右指针左移,小于等于基准值跳出循环等待
        if(left < right) swap(arr, left, right);// 交换两个指针数值
    } while (left < right);// 左指针位置大于右指针位置时跳出循环
    var swapPoint = left == right ? right - 1: right;
    swap(arr, begin, swapPoint)
    quickSort_2(arr, begin, swapPoint);
    quickSort_2(arr, swapPoint + 1, end);
}
function quickSort_1(arr){
    quickSort_2(arr, 0, arr.length); // 左闭右开
}
quickSort_1(arr);
console.log(arr)//[ 1, 2, 3, 4, 6, 7, 8, 9 ]
