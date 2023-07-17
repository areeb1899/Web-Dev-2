let dark = document.getElementById('dark');
let light = document.getElementById('light');
let textContent=document.getElementById('text');

dark.addEventListener("click", function () {
    document.body.style.backgroundColor = "black";
    textContent.style.color="white";
    light.style.color="white"
    dark.style.color="white"
    dark.style.border="2px solid white";
    light.style.border="2px solid white";

    
});

light.addEventListener("click", function () {
    document.body.style.backgroundColor = "#FFFFF0";
    textContent.style.color="black";
    light.style.color="black"
    dark.style.color="black"
    dark.style.border="2px solid black";
    light.style.border="2px solid black";

});

