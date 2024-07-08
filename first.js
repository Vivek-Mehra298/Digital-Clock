const time=document.querySelector("#time");
const timeformat=document.querySelector("#timeformat");

const showTime=()=>{
    let date=new Date();

    let hr=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();

    hr=hr<10?`0${hr}`:hr;
    min=min<10?`0${min}`:min;
    sec=sec<10?`0${sec}`:sec;

    //console.log("hours "+hr+" min "+min+" secs "+sec)
    time.innerHTML=`${hr}:${min}:${sec}`;

    timeformat.innerHTML=hr>12?"PM":"AM";
}

document.addEventListener('DOMContentLoaded',()=>{
    setInterval(showTime,1000);//read on mdn webdocs
})