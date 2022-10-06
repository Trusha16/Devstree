let array1 = [1, 0, 2, 3, 4];
let array2 = [3, 5, 6, 7, 8, 13];
let result1=[];
for (let i = 0; i < array2.length; i++) {
    result1 = array1[i]+array2[i];
    console.log(result1);
}

//query?????
let arr1 = [1, 0, 2, 3, 4];
let arr2 = [3, 5, 6, 7, 8, 13];
let result=[];
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        result = arr1[i]+arr2[i];
    console.log(result);
}
}


//Expected Output:
//[4, 5, 8, 10, 12, 13]