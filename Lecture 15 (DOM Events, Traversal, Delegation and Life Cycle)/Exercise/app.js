const h1=document.querySelector('h1')
const div=document.querySelector('div')

for(let elements of div.children){
    elements.addEventListener("mouseover",()=>{
        let randomColor=Math.floor(Math.random() * 0xffffff).toString(16);
        elements.style.backgroundColor=`#${randomColor}`;
    })
}

