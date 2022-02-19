function partition(arr, l, r) {
    let pivot = arr[r]

    let i = l
    for (let j = l;j <= r;j++) {
        if (arr[j] < pivot) {
            let temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp

            i ++
        }
    }

    let temp = arr[i]
    arr[i] = arr[r]
    arr[r] = temp

    return i
}

function quick_sort(arr, l, r) {
    if (l < r) {
        let pivot_pos = partition(arr, l, r)
        quick_sort(arr, l, pivot_pos - 1)
        quick_sort(arr, pivot_pos + 1, r)
    }
}

arr = [5, 3, 1, 2, 5, 6, 7, 2, 3,4577,1, 3443 , 34]
quick_sort(arr, 0, arr.length - 1)

console.log(arr.join(' '))