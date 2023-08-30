
//extracting elements from html
const calculateLove = document.querySelector('button');
const randomLove = Math.floor(Math.random() * 100 + 1);
const percentageLove = document.getElementById('percentageLove')
const loveCounting = document.getElementById('loveCounting')
const resetButton = document.getElementById('resetButton')



calculateLove.addEventListener('click', function () {

    const countLove = function (obj, start, end, duration) {                  //fake counting 100-20
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    const obj = document.getElementById("loveCounting");
    countLove(obj, 100, 20, 2000);




    function randomLoveFn() {
        loveCounting.remove();
        percentageLove.style.cssText = "font-size:2rem; color:darkred;"

    }

    //calculating love in percentage
    setTimeout(() => {

        if (randomLove === 100) {
            percentageLove.innerHTML = randomLove + "%<br>" + "You are made for each other";
            randomLoveFn();
        } else if (randomLove >= 50) {
            percentageLove.innerHTML = randomLove + "%<br>" + "You love each other";
            randomLoveFn();

        } else if (randomLove > 30) {
            percentageLove.innerHTML = randomLove + "%<br>" + "You need to work on your relationship";
            randomLoveFn();

        } else {
            percentageLove.innerHTML = randomLove + "%<br>" + "Oops! You don't love each other";
            randomLoveFn();

        }


    }, 2000);



})


//reset button
resetButton.addEventListener('click', () => {
    window.location.reload();
})