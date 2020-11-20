var t1 = document.getElementById("curTime");
var t2 = document.getElementById("curDate");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var hour = 2;
var min = 0;
var sec = 0;
var count=0;
var msgcount=0
var hourcount =0
setInterval( () =>{
    count+=1;
    msgcount+=1;
    var time = new Date();
    var month = time.getMonth() + 1;
    t1.innerHTML = `<h3>Time: ${time.toLocaleTimeString()} </h3>`;
    t2.innerHTML = `<h3>Date: ${time.getDate() +"-"+month+"-"+time.getFullYear()} </h3>`;
    sec=(60-count)%60;
    seconds.innerText=sec;
    minutes.innerText=min;
    hours.innerText = hour;
    if(msgcount%60==0){
        min = (120-(msgcount/60))%60;
        minutes.innerText=min;
    }
    if(count == 60){
        hour = 1;
        hour.innerText = hour;
        count =0;
    }
    if(hourcount%(3600)){
        hour =0;
        hour.innerText = hour;
    }
},1000);




