function doit(arr, n) {
    var g = []
    for (var i = 0;i < n;i ++) {
        var ans = -1
        for (var j = i - 1;j >= 0;j--) {
            if (arr[j] < arr[i]) {
                ans = arr[j]
                break
            }
        }
        g.push(ans)
    }

    console.log(g.join(' '))
}

/*

n = 8
arr = [39 27 11 4 24 32 32 1]

g = []
i = 0
ans = -1
j = i - 1 = 0 - 1 = -1

g = [-1]
i = 1
ans = -1
j = i - 1 = 1 - 1 = 0
    arr[j] < arr[i] arr[0] < arr[1]
j = -1

g = [-1, -1]
i = 2
ans = -1
j = 1
    27, 11
j = 0
    39, 11

g = [-1, -1, -1]
i = 3
ans = -1
j = 2...

g = [-1, -1, -1, -1]
i = 4
ans = -1
j = 3
    4, 24
    ans = 4
    break

g = [-1, -1, -1, -1, 4]
i = 5
j = 4
    24, 32
    ans = 24
    break

g = [-1, -1, -1, -1, 4, 24]


*/