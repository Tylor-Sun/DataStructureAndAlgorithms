function SearchBST(root, target, count){
    count++ // 循环次数的记录
    if(root == null || typeof target != 'number') return `false ${count}`;
    if(root.value == target) return `true ${count}`;
    if(root.value > target) return SearchBST(root.left, target, count);
    else return SearchBST(root.right, target, count);
}
module.exports = SearchBST;
