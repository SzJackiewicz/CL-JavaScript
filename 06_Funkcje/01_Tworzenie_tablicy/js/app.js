
function createArray (rows){
    let newArray = [];
    for (let i = 1; i <= rows; i++){
        newArray.push(i);
    }
    return newArray;
}

const r = createArray(5);
console.log(r);
