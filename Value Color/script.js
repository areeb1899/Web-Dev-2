const box=document.getElementById('box');
const inputEl=document.getElementById('value')


inputEl.addEventListener("input",()=>{
    box.style.backgroundColor=inputEl.value;
    box.style.borderRadius=inputEl.value;
    box.style.width=inputEl.value;

})