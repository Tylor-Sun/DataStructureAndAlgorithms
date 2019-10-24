// var linkListRoot = require('./LinkList/InvertLink');
//逆转链表
function invertedLink (root){
    if(root.next.next == null) {
        root.next.next = root;
        return root.next;
    }else {
        var newList = invertedLink(root.next);
        root.next.next = root;
        root.next = null;
        return newList
    }
}

// console.log(invertedLink(linkListRoot));

function swap (arr, a, b){
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
function quickSort(arr, begin, end){
    if(begin >= end - 1) return arr;
    var left = beign;
    var right = end;
    do {
        do left++; while(left < right && arr[left] < arr[begin])
        do right--; while(right > left && arr[right] > arr[begin]);
        if(left < right) swap(arr, left, right);
    }while( left < right);
    var swapPoint = left === right ? right - 1 : right;
    swap(arr, begin, swapPoint);
    quickSort(arr, begin, swapPoint );
    quickSort(arr, swapPoint  + 1, arr.length)
}

