function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var A = new Node('A');
var B = new Node('B');
var C = new Node('C');
var D = new Node('D');
var E = new Node('E');
var F = new Node('F');
var G = new Node('G');

A.left = C;
A.right = B;
B.left = D;
B.right = E;
C.left = F;
C.right = G;

module.exports = A;
