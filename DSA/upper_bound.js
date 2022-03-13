function upper_bound(arr, k) {
    let l = 0
    let r = arr.length - 1
    let up = -1

    while (l <= r) {
        let mid = l + parseInt((r - l) / 2)

        if (arr[mid] <= k) {
            l = mid + 1
            up = mid
        } else {
            r = mid - 1
        }
    }

    return up + 1
}