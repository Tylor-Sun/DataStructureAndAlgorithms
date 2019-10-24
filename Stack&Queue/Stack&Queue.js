function Stack(){
    this.arr = [];
    this.push = function (value){
        return this.arr.push(value);
    }
    this.pop = function (){
        return this.arr.pop();
    }
}

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.arr);// [ 1, 2, 3 ]
stack.pop();
console.log(stack.arr);// [ 1, 2 ]

function Queue(){
    this.arr = [];
    this.push = function (value){
        return this.arr.push(value);
    }
    this.shift = function (){
        return this.arr.shift();
    }
}
var queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue.arr);//[ 1, 2, 3 ]
queue.shift();
console.log(queue.arr)//[ 2, 3 ]


