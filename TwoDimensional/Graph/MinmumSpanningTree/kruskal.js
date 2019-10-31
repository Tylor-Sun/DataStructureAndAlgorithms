function Node(value) {
    this.value = value;
    this.neighbor = [];
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');

var Max = Infinity; // 最大距离
var distance = [    // 边集
    [0, 4, 7, Max, Max],
    [4, 0, 8, 6, Max],
    [7, 8, 0, 5, Max],
    [Max, 6, 5, 0, 7],
    [Max, Max, Max, 7, 0]
]
var pointSet = [];
pointSet.push(a, b, c, d, e);

/**
 *
 * @param gatherArr
 * @param tempBegin
 * @param tempEnd
 * @returns {boolean}
 */
function canLink(gatherArr, tempBegin, tempEnd) { // 连接条件判断
    var beginGather = null; // 起点集合
    var endGather = null; // 终点集合
    for (var i = 0; i < gatherArr.length; i++) {
        if(gatherArr[i].indexOf(tempBegin) > -1) { // 看起点在哪个集合内
            beginGather = gatherArr[i];
        }
        if(gatherArr[i].indexOf(tempEnd) > -1) { // 看终点在哪个集合内
            endGather = gatherArr[i]
        }
    }
    // 这两点都是新的点，没有存在于任何集合的点：可以连接，连接两个没有关联的点
    // 起点没有集合，终点有集合：可以连接，终点所在集合连接了起点
    // 终点没有集合，起点有集合：可以连接，起点所在集合连接了终点
    // 起点在一个集合终点在一个集合，集合不同：可以连接，连接两个集合
    if(beginGather != null && endGather != null && beginGather == endGather) { // 起点和终点在同一个集合：不可以连接
        return false
    }
    return true;
}

/**
 *
 * @param gatherArr
 * @param tempBegin
 * @param tempEnd
 */
function link(gatherArr, tempBegin, tempEnd) { // 关联两点
    var beginGather = null; // 起点集合
    var endGather = null; // 终点集合
    for (var i = 0; i < gatherArr.length; i++) {
        if(gatherArr[i].indexOf(tempBegin) > -1) { // 看起点在哪个集合内
            beginGather = gatherArr[i];
        }
        if(gatherArr[i].indexOf(tempEnd) > -1) { // 看终点在哪个集合内
            endGather = gatherArr[i]
        }
    }
    if(beginGather == null && endGather == null) { // 这两点都是新的点，没有存在于任何集合的点：连接两个没有关联的点-创建新的集合放入集合数组中
        var newGather = new Array(2);
        newGather.push(tempBegin);
        newGather.push(tempEnd);
        gatherArr.push(newGather);
    } else if(beginGather == null && endGather != null) { // 起点没有集合，终点有集合：将起点放入终点所在集合
        endGather.push(tempBegin);
    } else if(beginGather != null && endGather == null) { // 起点没有集合，终点有集合：将终点放入起点所在集合
        beginGather.push(tempEnd)
    } else if(beginGather != null && endGather != null && beginGather != endGather) { // 起点在一个集合终点在一个集合，集合不同：连接两个集合放入集合数组并删除原有集合
        var newGather = beginGather.concat(endGather);
        var beginGatherIndex = gatherArr.indexOf(beginGather);
        gatherArr.splice(beginGatherIndex, 1);
        var endGatherIndex = gatherArr.indexOf(endGather);
        gatherArr.splice(endGatherIndex, 1);
        gatherArr.push(newGather);
    }
    tempBegin.neighbor.push(tempEnd);// link two points
    tempEnd.neighbor.push(tempBegin);
}

/**
 *
 * @param pointSet
 * @param distance
 */
function kruskal(pointSet, distance) {
    var gatherArr = []; // 由集合构成的数组-二维数组
    while (true) {
        var minDis = Max;
        var begin = null;
        var end = null;
        for (var i = 0; i < distance.length; i++) {
            for (var j = 0; j < distance[i].length; j++) {
                var tempBegin = pointSet[i]; // 起点临时变量
                var tempEnd = pointSet[j]; // 终点临时变量
                if(i != j && distance[i][j] < minDis && canLink(gatherArr, tempBegin, tempEnd)) {
                    minDis = distance[i][j];
                    begin = tempBegin;
                    end = tempEnd;
                }
            }
        }
        link(gatherArr, begin, end);
        if(gatherArr.length === 1 && gatherArr[0].length === pointSet.length) break; // 集合数组只有一位且集合数组第一位集合长度与点集相同 跳出循环
    }
}

kruskal(pointSet, distance);
console.log(pointSet)
