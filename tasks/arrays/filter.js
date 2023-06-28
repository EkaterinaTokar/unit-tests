function filter(arr, predicate){
    for(let i = 0; i < arr.length; i++){
        if(typeof predicate === "function" && (!arr[i].active === predicate(arr))){
            return [arr[i].user] ;
        }else if(arr[i].active === predicate.active && arr[i].age === predicate.age){
            return [arr[i].user];
        }else if(arr[i].active === predicate[1]){
            return [arr[i].user];
        }else if(arr[i][predicate]){
            return [arr[i].user];
        }
    }
}

module.exports = filter;
