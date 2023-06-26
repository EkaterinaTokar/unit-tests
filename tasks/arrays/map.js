function map(element1, element2){
    if(typeof element2 === "function" &&  element1.constructor.name === "Array"){
        let newArr = [];
        for(let i = 0; i < element1.length; i++){
            let newElem = element2(element1[i]);
            newArr[i] = newElem;
        }
        return newArr;
    }else if(typeof element2 === "function" &&  typeof element1 === "object"){
        let newArr = [];
        let i = 0;
        for (let val in element1) {
            newArr[i] = element1[val] * element1[val];
            i++;
        }
        return newArr;
    }else if(element1.constructor.name === "Array" && typeof element2 ==="string"){
        let newArr = [];
        for(let i = 0; i < element1.length; i++){
            newArr[i] = element1[i][element2];
        }
        return newArr;
    }
}
module.exports = map;
