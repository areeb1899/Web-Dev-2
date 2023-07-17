let countH1 = document.getElementById("count");
let saveToothpick=document.getElementById("record");

let count = 0;

function pick() {
    count++;
    countH1.textContent = count;
}


function save(){
    saveToothpick.textContent+=count+"-";
}

function reset(){
    countH1.textContent=0;
    count=0;
}

function resetRecord(){
    saveToothpick*0;
    saveToothpick.textContent="Record:";

    

}