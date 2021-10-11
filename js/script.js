function powerNum(number) {
    return Math.pow(number, 2);
}

function createOriginalArr(array) {
    outArr = [];
    //console.log(Array.isArray(array));
    //if array is object Array
    if (Array.isArray(array)) {
        // doing algorytm
        for(let i = 0; i < array.length; i++){
            console.log(outArr.indexOf(array[i]));
            if(outArr.indexOf(array[i]) != -1){
                continue;
            }
            else{
                outArr.push(array[i]);
            }
        }
        //console.log();
    }
    else {
        //console.log(array);
        outArr.push(array);
    }
    return outArr;
}

function isPositiveArr(array){
    //console.log(Array.isArray(array));
    if(Array.isArray(array)){
        for(let i=0; i<array.length; i++){
            // console.log(`cycle ${i}:`, typeof(array[i]) === Number && array[i] > 0);
            // console.log(typeof(array[i]),Number.isNaN(array[i]));
            if(array[i] > 0){
                continue;
            }
            else{
                return false;
            }
        }
    }
    else{
        return false;
    }
    return true;
}

let array = [];

let changedArr = [];

let liyArray = 5;

let liyArray2 = ["kglsggjls","kglsggjls",'fkhgsdfkjhgsj'];

let testArr1 = [5,6,6,1,1,7,8,];
let testArr2 = [5,-6,6,1,1,7,8,];
let testArr3 = [5,6,1,1,7,0,8,];
let testArr4 = [0,0,0,0,0,0,0,0,0,0,0];

let testArr5 = [
    5,
    "someString",
    "anyString?",
    Object,
    45436,
    Object,
    true,
    false,
    true,
];

for (let i = 0; i < 5; i++) {
    array[i] = i;
    changedArr[i] = powerNum(i);
}

// console.log(array);
// console.log(changedArr);
// console.log("test0 function2: ",createOriginalArr(testArr1));
// console.log("test1 function2: ",createOriginalArr(testArr2));
// console.log("test2 function2: ",createOriginalArr(liyArray));
// console.log("test3 function2: ",createOriginalArr(liyArray2));
// console.log(typeof(liyArray2));


console.log("test1 function3: ",isPositiveArr(testArr1)); //true
console.log("test2 function3: ",isPositiveArr(testArr2));
console.log("test3 function3: ",isPositiveArr(testArr3));
console.log("test4 function3: ",isPositiveArr(testArr4));
console.log("test5 function3: ",isPositiveArr(testArr5));
console.log("test6 function3: ",isPositiveArr(liyArray));
console.log("test7 function3: ",isPositiveArr(liyArray2));