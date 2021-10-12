

function createOriginalArr(array) {
    outArr = [];
    //console.log(Array.isArray(array));
    //if array is object Array
    if (Array.isArray(array)) {
        // doing algorytm
        for (let i = 0; i < array.length; i++) {
            //console.log(outArr.indexOf(array[i]));
            if (outArr.indexOf(array[i]) != -1) {
                continue;
            }
            else {
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

function isPositiveArr(array) {
    //console.log(Array.isArray(array));
    if (Array.isArray(array)) {
        for (let i = 0; i < array.length; i++) {
            // console.log(`cycle ${i}:`, typeof(array[i]) === Number && array[i] > 0);
            // console.log(typeof(array[i]),Number.isNaN(array[i]));
            if (array[i] > 0) {
                continue;
            }
            else {
                return false;
            }
        }
    }
    else {
        return false;
    }
    return true;
}

function deletePositiveNum(array) {
    outArr = [];
    //console.log(Array.isArray(array));
    //if array is object Array
    if (Array.isArray(array)) {
        // doing algorytm
        for (let i = 0; i < array.length; i++) {
            //console.log(outArr.indexOf(array[i]));
            if (array[i] < 0) {
                outArr.push(array[i]);
            }
            else {
                continue;
            }
        }
        //console.log();
    }
    else {
        //console.log(array);
        if (array < 0) {
            outArr.push(array);
        }
    }
    return outArr;
}

function calcElements(array) {
    let sum = 0;
    if (Array.isArray(array)) {
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
    }
    return sum;
}

function findSubarray(array) {
    outArr = [];
    if (Array.isArray(array)) {
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                outArr.push(array[i]);
            }
            else {
                continue;
            }
        }
    }
    return outArr;
}

function deleteShortWords(str) {
    outStr = "";
    let temp = str.indexOf(' ');
    console.log(temp);
    while (str != '') {
        if (temp > 3) {
            outStr = outStr + str.slice(0, temp) + ' ';
        }
        str = str.slice(++temp);
        //console.log(str);
        temp = str.indexOf(' ');
        if (temp == -1 && str.length >= 3) {
            outStr = outStr + str;
            break;
        }
        if (temp == -1 && str.length < 3) {
            break;
        }
        //console.log(temp);
    }
    return outStr;
}

let array = [];

let changedArr = [];

let liyArray = 5;

let liyArray2 = ["kglsggjls", "kglsggjls", 'fkhgsdfkjhgsj'];

let testArr1 = [5, 6, 6, 1, 1, 7, 8,];
let testArr2 = [5, -6, 6, 1, 1, 7, 8,];
let testArr3 = [5, -6, 1, 1, -7, 0, -8, 10, 63, -100];
let testArr4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

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

let testArr6 = [
    5,
    6,
    [1, 2, 3,],
    6,
    7,
    [4, 5, 6, 7, 8, [1, 2]],
];