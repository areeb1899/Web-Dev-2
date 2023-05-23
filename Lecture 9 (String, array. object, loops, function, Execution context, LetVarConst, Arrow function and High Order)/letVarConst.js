
// Var vs let vs Const 

var a = 10;
var a =20;
a=30; 
console.log(a);

// let b= 10;
// let b=20; //cant use this
// b=40;

// console.log(b);



// can not use in all the cases
// const c=10;
// const c=40;
// c=50;

// console.log (c);





// -----functional level and block level for let vs var vs const----- 
function fun(y){
if(y>5){
    let x= "inside if";
    console.log(x);
    var p="inside if var";

}
else {
    let z="inside else";
    console.log(z);
    console.log (x); //error
    console.log (p);
}
console.log(p);

}

fun(6);