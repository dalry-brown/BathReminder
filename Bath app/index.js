let update = document.getElementById("update");
function countdown(){
    const newDate = new Date(document.getElementById('bath-date').value).getTime();
    const currentDate = new Date().getTime();
    const TotalSeconds = (newDate - currentDate)/1000;
    
    
    const days = Math.floor((TotalSeconds / 3600 / 24));
    const hours = Math.floor((TotalSeconds / 3600)%24);
    const minutes = Math.floor((TotalSeconds / 60)%60);
    const seconds = Math.floor((TotalSeconds)%60);

    document.getElementById('days').innerHTML = formatTime(days);
    document.getElementById('hours').innerHTML = formatTime(hours);
    document.getElementById('minutes').innerHTML = formatTime(minutes);
    document.getElementById('seconds').innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time; 
}

countdown();
setInterval(countdown, 1000);
