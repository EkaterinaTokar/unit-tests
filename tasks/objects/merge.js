function merge(object, other){
    let newArr = {};
    for(let prop in object){
        newArr[prop] = [];
        for(let j = 0; j < object[prop].length; j++){
            newArr[prop][j] = { ...object[prop][j], ...other[prop][j] };
        }
    }
    return newArr
}
module.exports = merge;
