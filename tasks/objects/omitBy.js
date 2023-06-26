function omitBy(object, predicate){

    for (let key in object){
        for(let i = 0; i < predicate.length; i++){
            if(key === predicate[i]){
                delete key;
                delete object[key];
                break;
            }
        }
    }
    return object;
}

module.exports = omitBy;
