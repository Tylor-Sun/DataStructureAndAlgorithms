var b = {
    value: 2,
    next: null
}

var a = {
    value: 1,
    next:b
}
console.log(a.next === b) // true


function Node(value){
    this.value = value;
    this.next = null;
}
var a = new Node(1);
var b = new Node(2);
var c = new Node(3);

// 连接链表
a.next = b;
b.next = c;
c.next = null;

function ergodicLink(root) {
    var temp = root;
    while(temp != null){
        console.log(temp.value)
        temp = temp.next;
    }
}
ergodicLink(a);// 依次打印1、2、3

function ergodicLink_2(root) {
    if(root == null) return ;
    console.log(root.value);
    ergodicLink_2(root.next);
}
ergodicLink_2(a); // 依次打印1、2、3

module.exports = a;

