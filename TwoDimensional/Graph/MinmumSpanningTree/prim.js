// Graph结构声明
/**
 *
 * @param value
 * @constructor
 */
function Node(value) {
    this.value = value;
    this.neighbor = [];
}

var A = new Node('A');
var B = new Node('B');
var C = new Node('C');
var D = new Node('D');
var E = new Node('E');


const Max = Infinity; // 最大距离
const distance = [    // 边集
    [0, 4, 7, Max, Max],
    [4, 0, 8, 6, Max],
    [7, 8, 0, 5, Max],
    [Max, 6, 5, 0, 7],
    [Max, Max, Max, 7, 0]
]
const pointSet = []; // 点集
pointSet.splice(0, 0, A, B, C, D, E) //向点集中添加点

// MST实现
/**
 *
 * @param str
 * @returns {number}
 */
function getIndex (str) {
    for(let i = 0; i < pointSet.length; i ++) {
        if(str === pointSet[i].value) return i;
    }
    return -1;
}

/**
 *
 * @param pointSet
 * @param distance
 * @param nowPointSet
 * @returns {Node}
 */
function getMinDisNode(pointSet, distance, nowPointSet) { // 根据已有节点集合获取最小代价的边
    let startNode = new Node(); // 起点
    let minDisNode = new Node(); // 终点
    let minDis = Max; // 最短路径
    for(let i = 0; i < nowPointSet.length ; i ++){ // 寻找最短路径
        const nowPointIndex = getIndex(nowPointSet[i].value); // 找到当前点在边集中的索引
        for(let j = 0; j < distance[nowPointIndex].length ; j++) {
            // 两个条件：是权重最小边 且 没有被连接
            if (distance[nowPointIndex][j] < minDis && nowPointSet.indexOf(pointSet[j]) == -1) {
                startNode = nowPointSet[i]; // 起点：结果集当前元素
                minDisNode = pointSet[j]; // 终点：边集中满足条件的元素对应的点
                minDis = distance[nowPointIndex][j]; // 最短路径：边集满足条件的元素
            }
        }
    }
    startNode.neighbor.push(minDisNode); // link two points
    minDisNode.neighbor.push(startNode)
    return minDisNode;
}

/**
 *
 * @param pointSet
 * @param distance
 * @param start
 * @returns {[]}
 */
function prim(pointSet, distance, start) {// 普利姆算法
    var nowPointSet = []; // 最小生成树的结果点集
    nowPointSet.push(start); // 将起始点放入结果集内
    while(true) {
        const minDisNode = getMinDisNode(pointSet, distance, nowPointSet); // 获取最小代价的边
        nowPointSet.push(minDisNode); // 将节点放入结果集内，再次递归
        if(nowPointSet.length === pointSet.length) break; // 当所有点都在结果集内时跳出循环
    }
    return nowPointSet;
}

// console.log(prim(pointSet, distance, pointSet[2])) // 返回值打印

prim(pointSet, distance, pointSet[2])
console.log(pointSet) // 改变源对象打印：因为对象赋值拿到的是这个对象的引用，改变赋值的对象源对象也同样改变
