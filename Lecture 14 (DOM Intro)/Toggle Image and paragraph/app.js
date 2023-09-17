
const div=document.querySelector('div');
const para=document.querySelector('p')

setInterval(function() {
    div.classList.toggle('image_toggle')
}, 1000);


setInterval(() => {
    para.classList.toggle('hide-para')
}, 1000);


