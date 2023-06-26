function pickBy(object, predicate){
    let newObj = {}
    for (let key in object){
        for(let i = 0; i < predicate.length; i++){
            if(key === predicate[i]){
                newObj[key] = object[key];
            }
        }
    }
    return newObj;
}

module.exports = pickBy;
