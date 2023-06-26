function includes(collection, value, fromIndex = 0){
    if(collection.constructor.name === "Array"){
        for(let i = fromIndex; i < collection.length; i++){
            return collection[i] === value || false;
        }
    }else if(typeof collection === "object"){
        for(let val in collection){
            let h = fromIndex;
            if(collection[val[h]] === value){
                return true;
            }
            h ++;
        }
        return false;
    }else if(typeof collection === "string"){
        let regexp =  new RegExp(value);
        return regexp.test(collection) || false;
    }
}

module.exports = includes;
