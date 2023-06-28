function compact(arr) {
    let newArr = [];
    let h = 0;
    for(let i = 0; i< arr.length; i++){
        if(arr[i]){
            newArr[h] = arr[i];
            h++;
        }
    }
    return newArr;
}

module.exports = compact;
