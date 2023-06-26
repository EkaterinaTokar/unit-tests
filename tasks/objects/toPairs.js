function toPairs(obj){
    let arrFromObj = [];
    let i = 0;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            arrFromObj[i] = [key, obj[key]];
            i++;
        }
    }
    return arrFromObj;
}
module.exports = toPairs;
