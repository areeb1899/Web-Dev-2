const textEl=document.getElementById('text');
const buttonEl=document.getElementById('button');
const resetEl=document.getElementById('reset')
const API="https://api.quotable.io/random"


buttonEl.addEventListener("click",()=>{
    let randomColor=Math.floor(Math.random()*0xffffff).toString(16);
    document.getElementsByTagName("body")[0].style.background = `#${randomColor}`;
    
    fetch(API).then(res=>res.json()).then(data=>{
        textEl.innerHTML=`&ldquo;${data.content}&rdquo;`
      
    }).catch(() =>alert('Error fetching Quote!'));
   
})

resetEl.addEventListener("click",()=>{
    textEl.textContent="";
    document.getElementsByTagName('body')[0].style.backgroundColor="white";
})