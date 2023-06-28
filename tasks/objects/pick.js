function pick(object, path){
    let newObj ={};
    for(let key in object){
        for(let i = 0; i < path.length; i++){
            if(key === path[i]){
                newObj[key] = object[key];
            }
        }
    }
    return newObj;
}

module.exports = pick;
