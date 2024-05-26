function rearrange (arr, n) {
    let pos = [];
    let neg = [];
    let result = [];
    for (let i = 0; i < n; i++) {
        if (arr[i] >= 0) {
            pos.push(arr[i]);
        } else {
            neg.push(arr[i]);
        }
    }
    let i = 0; 
    let j = 0; 
    while (i < pos.length && j < neg.length) {
        result.push(pos[i]);
        result.push(neg[j]);
        i++;
        j++;
    }
    while (i < pos.length) {
        result.push(pos[i]);
        i++
    }
    while (j < neg.length) {
        result.push(neg[j]);
        j++
    }
    return result;
}

console.log(rearrange([9, 4, -2, -1, 5, 0, -5, -3, 2], 9));