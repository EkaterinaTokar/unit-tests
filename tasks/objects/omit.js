function omit(object, paths){
    let newObj ={};
    for(let key in object){
        let shouldOmit = false;
        for(let i = 0; i < paths.length; i++){
            if(key === paths[i]){
                shouldOmit = true;
                break;
            }
        }
        if (!shouldOmit) {
            newObj[key] = object[key];
        }

    }
    return newObj;
}
module.exports = omit;
