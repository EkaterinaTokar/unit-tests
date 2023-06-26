function take(array, num = 1){
    if(num < 0) return [];
    if(array.length > num){
        array.length = num;
    }
    return array;
}
module.exports = take;
