// Traversing through the children of parents =============================================================

const div=document.querySelector('div')

for(let child of div.children){
    child.style.color='blue'
}

//Selecting the specific image using Traversal method
const image=document.querySelector('div img')

image.style.border="2px solid black"



//Selecting next element sibling
image.nextElementSibling.style.color="red"


// selecting previous element sibling.
image.previousElementSibling.style.color="green"

// creating element in JS without adding it to the HTML======================================================== 
const newImage=document.createElement('img');

//setting the attribute of the image
newImage.setAttribute('src','https://plus.unsplash.com/premium_photo-1695753489648-4544095c7502?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60')

//adding the element using appendchild
image.nextElementSibling.appendChild(newImage)

//append and prepend
const para=document.querySelector('p')

para.append('This is a newly added text ')
para.prepend("This is a prepended text ")

const em=document.createElement('em')

em.innerText=" THIS IS AN EM TAG"

para.append(em)


//removing the element
const div2=document.querySelector('div');

h2.remove()



