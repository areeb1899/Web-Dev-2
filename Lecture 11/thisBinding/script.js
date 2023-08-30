// console.log(this);



// -----------default-----------
// function fun(){
//     console.log(this);

// }

// fun();


// ------implicit--------------

let obj= {
    num:84935783497,
    str:"this is string",
    fun:function (){
        console.log(this)
    }
}

// obj.fun();









function updateAge(age,name){
    this.age=age;
    


}
// function updateAge(first parameter, second parameter, third parameter and so on...){
//     this.age=age;
    
// }



let student1={
    name:"Amaan",
    age:22,
    rollNo:12
}

let student2={
    name:"Rohan",
    age:20,
    rollNo:10
}



// updateAge.call(object, firstArgument, secondArgument, and so on.....)
updateAge.apply(student1,[18, 'defkdhg']);
updateAge.call(student1,18);
updateAge.call(student2,30);

console.log(student1);
console.log(student2);





// ---------------constructor function with new Keyword-----------------



function Student(name,age, rollNo){
    this.name=name;
    this.age=age;
    this.rollNo=rollNo;

}


let Student3=new Student('Akshay','55',13);
let Student4=new Student('Ashutosh','40',98);
console.log(Student3);
console.log(Student4);