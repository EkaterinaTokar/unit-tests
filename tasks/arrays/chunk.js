function chunk(arr, num) {
    let newArr = [];
    let n = 0;
    if (num === 2) {
        for (let i = 0; i < num; i++) {
            newArr[i] = [arr[n], arr[n + 1]];
            n += 2;
        }
    } else if (num === 3){
        for (let i = 0; i < num; i++) {
            if (n + 2 < arr.length) {
                newArr[i] = [arr[n], arr[n + 1], arr[n + 2]];
            } else if (n + 1 < arr.length) {
                newArr[i] = [arr[n], arr[n + 1]];
            } else if (n < arr.length){
                newArr[i] = [arr[n]];
            }
            n += 3;
        }
    }else{
        for (let i = 0; i < arr.length; i++) {
            newArr[i] = [arr[i]];
        }
    }
    return newArr;
}

module.exports = chunk;
