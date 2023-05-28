function outerFun(){
    let money=150;

    function innerFun(){
        money++

    }
    return innerFun;
}

let fun1=outerFun();

fun1();
fun1();
fun1();
fun1();
fun1();
fun1();
fun1();
