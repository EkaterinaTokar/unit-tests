function find(arr, predicate){
    for(let i = 0; i < arr.length; i++) {
        if (typeof predicate === "function") {
            if(predicate(arr[i])) return arr[i].user || undefined;
        } else if (typeof predicate === "object") {
            if ((arr[i].age === predicate.age) && (arr[i].active === predicate.active)) {
                return arr[i].user || undefined;
            }
        }
        if (predicate.constructor.name === "Array") {
            if (arr[i][predicate[0]] === predicate[1]) return arr[i].user || undefined;
        }
        if (typeof predicate === "string") {
            if(arr[i][predicate]) return arr[i].user || undefined;
        }
    }
}

module.exports = find;
