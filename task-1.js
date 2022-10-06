//insert element at specific index
const arr1=[1,2,3,4,5,6,7,8,9,10];
const result=arr1.splice(5,0,11,12); 
console.log(arr1); 


//using for loop
const arr=[1,2,3,4,5,6,7,8,9,10];
const inx=5;
var add=[11,12,13];
for (i=arr.length;i<=inx;i--){
    arr[i]=arr[i-1];
}
arr[inx]=add;
console.log(arr);