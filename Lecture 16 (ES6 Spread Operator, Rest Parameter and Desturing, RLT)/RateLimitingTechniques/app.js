// Debouncing

const inp=document.querySelector('input');

function fetchData(searchWord){
    console.log('fetching Data');
}

function debounce(func,delay){
    let timer=null;
    return function (...args){
        clearTimeout(timer);
     timer=setTimeout(() => {
        func(...args)
     }, delay);
    }
}

function throttle(func,delay){
    let startTime=0;
    return function (...args){
        let currentTime=new Date().getTime();
       if(currentTime-startTime>delay){
        func(...args)
        startTime=currentTime;
       }
    }

}

const fetchDataWithDebounce=debounce(fetchData,800);
const fetchDataWithThrottle=throttle(fetchData,200);

inp.addEventListener('keyup',()=>{
    const searchWord=inp.value
    // fetchDataWithDebounce(searchWord)
    fetchDataWithThrottle(searchWord)
})


