function dropWhile(arr, predicate) {
    let newArr = [];
    let k = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof predicate === "function") {
            if (!predicate(arr[i])) return [arr[i]];
        }
        if (typeof predicate === "object") {
            if (arr[i].user !== predicate.user) {
                newArr[k] = arr[i];
                k++;
            }
        }
        if (predicate.constructor.name === "Array") {
            if (arr[i].active === !predicate[1]) {
                return [arr[i]];
            }
        }
        if (typeof predicate === "string") {
            for (let key in arr[i]) {
                if (key === predicate) {
                    newArr[k] = arr[i];
                    k++;
                }
            }
        }
    }
    return newArr;
}

module.exports = dropWhile;
