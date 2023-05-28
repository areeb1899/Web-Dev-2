// function outerFun(){
//     let money=150;

//     function innerFun(){
//         money++
//        function innerMostFun(){
//         money++;
//         console.log(money);
//        }
//        return innerMostFun;
//     }
//     return innerFun;
// }

// let fun=outerFun();
// let fun1=fun();
// let fun2=fun();

// fun1();
// fun1();
// fun2();
// fun2();
// fun1();



function outerFun(){
    let money=150;

    function innerFun(){
        money++
        a=10;
       function innerMostFun(){
        money++;
        console.log("money: ", money, "a:"+ a++);
       }
       return innerMostFun;
    }
    return innerFun;
}

let fun=outerFun();
let fun1=fun();
let fun2=fun();

fun1();
fun1();
fun2();
fun2();
fun1();