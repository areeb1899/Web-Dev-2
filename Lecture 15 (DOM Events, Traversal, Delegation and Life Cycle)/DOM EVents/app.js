const h2=document.querySelector('h2')
//click event
h2.addEventListener('click',()=>{
    h2.classList.toggle('toggleH2')
})


//keyboard event
const inp=document.querySelector('input');
inp.addEventListener('keydown',(e)=>{
    // console.log(inp.value);
    console.log(e);
})


//mouse event-hovering
const btn=document.querySelectorAll('button');

for (let btns of btn){
    btns.addEventListener('mouseenter',()=>{
        btns.classList.add('buttons')
    })
    btns.addEventListener('mouseleave',()=>{
        btns.classList.remove('buttons')
    })
}


const form=document.querySelector('form');


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log('submitted')
    console.log(form.elements.password.value)
    console.log(form.elements.username.value)
   
})