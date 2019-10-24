// 创建8*8的二维数组
var arr = new Array(8);
for(var i = 0; i < arr.length; i++) {
    arr[i] = new Array(8);
}

function Node (value) {
    this.value = value;
    this.neighbor = [];
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');

a.neighbor.push(b);
a.neighbor.push(c);
a.neighbor.push(d);
b.neighbor.push(a);
c.neighbor.push(a);
c.neighbor.push(d);
d.neighbor.push(c);
d.neighbor.push(a);

console.log(a)
console.log(b)
console.log(c)
console.log(d)
