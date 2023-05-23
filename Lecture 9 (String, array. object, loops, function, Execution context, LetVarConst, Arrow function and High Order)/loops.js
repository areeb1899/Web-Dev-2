var arr=[1,4,5,7,8,12,56]

console.log(arr.length);
// normal for loop---------

for (var i=0; i<arr.length; i++) {
    console.log(arr[i]);
}



// ----------for loop ( for array)---------

for(var item of arr){
    console.log(item);
}


// -----------------for in loop (for object)-------

    var person = {
        name:"Aman Sharma"
        "full name": "Aman Sharma",
        age:"35",
        isAdult:true,
        marks:[49,68,90]

}

for (var key in person){
    console.log(person[key]);
}