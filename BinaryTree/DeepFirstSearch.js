var root = require('./BinaryTree')

// 深度优先搜索
function DeepFirstSearch(root, target) {
    if(root == null ) return false;
    if(root.value == target) return true;
    var left = DeepFirstSearch(root.left, target);
    var right = DeepFirstSearch(root.right, target);
    // left、right等待函数的执行结果、
    // 而return等待left||right结果一层一层的等待
    // 最终无论那一层的left或right为真最终的结果就会返回真
    return left || right;
}

console.log(DeepFirstSearch(root, 'P'))



