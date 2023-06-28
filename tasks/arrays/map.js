function map(element1, element2){
    let newArr = [];
    for(let i = 0; i < element1.length; i++){
    if(typeof element2 === "function" &&  element1.constructor.name === "Array") {
        newArr[i] = element2(element1[i]);
    }else if(element1.constructor.name === "Array" && typeof element2 ==="string"){
            newArr[i] = element1[i][element2];
        }
    }

    if(typeof element2 === "function" &&  typeof element1 === "object"){
        let i = 0;
        for (let val in element1) {
            newArr[i] = element1[val] * element1[val];
            i++;
        }
    }
    return newArr;
}

module.exports = map;
