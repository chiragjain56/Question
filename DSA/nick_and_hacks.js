function can_reach_n(n, currentbalance) {
    if (currentbalance == n) {
        return true
    }
    
    if (currentbalance > n) {
        return false
    }
    
    return can_reach_n(n, currentbalance * 10) || can_reach_n(n, currentbalance * 20)
}

function runp(input) {
    var lines = input.split('\n')
    
    var t = +lines[0]
    
    for(var i = 1;i <= t;i++) {
        var n = +lines[i]
        
        if (can_reach_n(n, 1)) {
            console.log("Yes")
        } else {
            console.log("No")
        }
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    
    runp(read)
});