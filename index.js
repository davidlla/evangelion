/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
*/


// ex 1
/*
let newarr = [2,4,7,1,12,4,9,5,8,6]

function lowtoHigh(arr){
  console.log (arr.sort((a,b) => a-b))
}

*/

// ex 2
/*
let arr1 = [1, 2, 1, 2, 1];
let arr2 = [2, 2, 2, 1, 3, 1, 2];
let sharedValues = [];

for (let i = 0; i < arr1.length; i++) {
    let found = false;

    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
            found = true;
           
        }
    }

    if (found) {
        sharedValues.push(arr1[i]);
    }
}

console.log("ערכים משותפים:", sharedValues);
*/


// ex 3
/*
const marr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for (let i = 0; i < marr.length; i++) 
    for (let j = 0; j < marr[i].length; j++) {
        console.log(marr[i][j]);
    }
*/

//new ex 3
/* 
const marr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function average(matri) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < matri.length; i++) {
        for (let j = 0; j < matri[i].length; j++) {
            sum += matri[i][j]; 
            count++;             
        }
    }

    return sum / count; 
}
console.log(average(marr)); 
*/


// ex 4

let randarr = [1,2,3,4,1,5,3,6,3,2,4,5,1,3,5,3,6,3,2,4,5,6,7,8,9,0];
let focusnum = 3;
let appearance = {}

function countnumonarr (randarr, focusnum){
    let count = 0;
    for (let i = 0; i < randarr.length; i++) {
        if (randarr[i] === focusnum) {
            count++;
        }
    }
    appearance[focusnum] = count;
    console.log(appearance);
}

countnumonarr(randarr, focusnum);
