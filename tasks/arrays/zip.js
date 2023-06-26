function zip(...arg) {
    let newArr = [];
    for (let i = 0; i < arg[0].length; i++) {
        let subArr = [];
        for (let j = 0; j < arg.length; j++) {
            subArr[subArr.length] = arg[j][i];
        }
        newArr[newArr.length] = subArr;
    }
    return newArr;
}
module.exports = zip;
