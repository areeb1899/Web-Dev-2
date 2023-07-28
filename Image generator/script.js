//click to generate images using api
const button = document.getElementById('button');
button.addEventListener('click', () => {
    fetch("https://dog.ceo/api/breeds/" + "image/random")
        .then(res => res.json())
        .then(data => image.src = data.message)
        .catch(err => console.log(err))

    image.style.cssText = "border:2px solid black; box-shadow:10px 15px 10px 5px black;max-width:60%; min-height:60%;"
    let color = Math.floor(Math.random() * 0xffffff).toString(16);
    document.getElementsByTagName('body')[0].style.background = `#${color}`;
    click.style.visibility = "hidden"


});

//clear button with hiding effects
const clear = document.getElementById('clear');
const click = document.getElementById('click');
clear.addEventListener('click', () => {
    document.getElementById('image').style.opacity = '0';
    document.getElementsByTagName('body')[0].style.background = 'white';
    button.style.visibility = "hidden"
    click.style.visibility = "visible"

});

//"click here" button with hiding effects
click.addEventListener('click', () => {
    fetch("https://dog.ceo/api/breeds/" + "image/random")
        .then(res => res.json())
        .then(data => image.src = data.message)
        .catch(err => console.log(err))

    image.style.cssText = "border:2px solid black; box-shadow:0 0 10px 5px black;max-width:60%; min-height:70%;"
    let color = Math.floor(Math.random() * 0xffffff).toString(16);
    document.getElementsByTagName('body')[0].style.background = `#${color}`;
    button.style.visibility = "visible"
    click.style.visibility = "hidden"

});


//hide the "Click to change image" button when window reloads
document.addEventListener("DOMContentLoaded", ()=> {
    document.getElementById("button").style.visibility = "hidden";
});