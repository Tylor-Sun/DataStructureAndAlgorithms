var root = require('../BinaryTree')
// BFS 广度优先搜索
function BreadthFirstSearch(rootList, target) {
    if (rootList == null || rootList.length == 0) return false;
    var childRootList = [];
    for (var i = 0; i < rootList.length; i++) {
        if (rootList[i].value == target) {
            return true;
        } else {
            childRootList.push(rootList[i].left);
            childRootList.push(rootList[i].right);
        }
    }
    return BreadthFirstSearch(childRootList, target);
}

// 执行时传入一个集合根节点-被数组包裹的根节点
console.log(BreadthFirstSearch([root], 'B'))
