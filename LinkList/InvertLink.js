function Node(value) {
    this.value = value;
    this.next = null;
}

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

module.exports = node1;

// 遍历
function ergodicLink(root) {
    var temp = root;
    while (true) {
        if (temp != null) console.log(temp.value)
        else break;
        temp = temp.next;
    }
}

// ergodicLink(node1)

// 逆置链表-递归
function invertLink(root) {
    if (root.next.next === null) { // 倒数第二个节点
        root.next.next = root; // 将最后一个节点的指向置为倒数第二个节点
        return root.next; // 递归出口
    } else {
        var result = invertLink(root.next);// 递归执行查找到尾节点,依次执行
        root.next.next = root;// 让下一个结点指向当前结点
        root.next = null;// 将当前结点的指向置为空,避免死循环
        return result;// 按递归思想这里是最后的递归结果
    }
}

var newRoot = invertLink(node1);
console.log(newRoot)
ergodicLink(newRoot)
