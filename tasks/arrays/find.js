function find(arr, predicate){
    for(let i = 0; i < arr.length; i++) {
        if (typeof predicate === "function") {
            return predicate(arr[i]) ? arr[i].user : false;
        } else if (typeof predicate === "object") {
            if ((arr[i].age === predicate.age) && (arr[i].active === predicate.active)) {
                return arr[i].user;
            }
        }
        if (predicate.constructor.name === "Array") {
            if (arr[i][predicate[0]] === predicate[1]) return arr[i].user
        }
        if (typeof predicate === "string") {
            return arr[i][predicate] ? arr[i].user : false;
        }
    }
}
module.exports = find;
