function changeColor() {
    let color=Math.floor(Math.random()*0xffffff).toString(16);
    document.getElementsByTagName("body")[0].style.background = `#${color}`
    
}
