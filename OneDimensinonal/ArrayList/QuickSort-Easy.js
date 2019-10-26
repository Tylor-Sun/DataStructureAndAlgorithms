var arr = [4, 1, 6, 9, 3, 2, 8, 7]

function quickSort(arr) {
    if (arr == null || arr.length == 0) return [];
    var leader = arr[0],
        left = [],
        right = [];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < leader) left.push(arr[i])
        else right.push(arr[i])
    }
    left = quickSort(left);
    right = quickSort(right);
    left.push(leader);
    return left.concat(right);
}
quickSort(arr);
console.log(arr);//[ 1, 3, 2, 4, 6, 8, 7, 9 ]
