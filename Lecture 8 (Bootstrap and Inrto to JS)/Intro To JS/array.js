var arr=[1,2,3,true,"hello",[90,50,60]];

console.log(arr[5]);
for(let i=0, i<arr.length,i++){
    console.log(arr[i]);
}

//for of loop
for(let item of arr) {
    console.log(item);
}

console.log("before:" arr);

arr.push(6);  //push enters the one number at the end of the array, number should be entered in the bracket.
arr.push(7);


arr.pop();   //pop deletes the one value from the end of the array
arr.pop();
arr.pop();


arr.shift();  // shift deletes the one value from the start of the array
arr.shift();


arr.unshift(5);  //unshift enters the value from the start of the array, number should be entered in the bracket.

console.log("after:" arr);


var arr1=[1,2,3,4,5,6,7]

console.log(arr1);

arr.splice()