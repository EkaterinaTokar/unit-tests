function drop(arr, num = 1){
    let newArr = [];
    if(num < 0){
        return newArr;
    }
    for(let i = num; i< arr.length; i++){
        newArr[i - num] = arr[i];
    }
    return newArr;
}

module.exports = drop;
