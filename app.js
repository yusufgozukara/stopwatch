let minute = document.querySelector(".minute");
console.log(minute);
let second = document.querySelector(".second");
let millisecond = document.querySelector(".millisecond");
let conti = document.querySelector(".conti");
let btnStart = document.querySelector('#asdf')
m1 = 0, s1 = 0, m2 = 0;
let interval;


document.querySelector('.start').addEventListener("click", (event)=>{

    if(event.target.classList.contains('start')){
        event.target.classList.remove('start');
        event.target.innerHTML = 'Pause';
        // clearInterval(interval)
        interval = setInterval(stopwatch, 10)
    } 
    else{
        event.target.classList.add('start');
        event.target.innerHTML = 'Start';
        clearInterval(interval)
    }
    
    
})
document.querySelector('.reset').addEventListener("click", () => {

        clearInterval(interval)
        
        btnStart.innerHTML = 'Start';
        [m1, s1, m2] = [0,0,0]; 
        btnStart.classList.add('start');
        minute.innerHTML = "00";
        second.innerHTML = "00";
        millisecond.innerHTML = "00";

})


function stopwatch(){
    m1+=1;
   
    if(m1 == 100){
        m1 = 0;
        s1 ++;

        if(s1 == 60){
            s1 = 0;
            m2++
        }
    }
    let min = m2 < 10 ? "0" + m2 : m2;
    console.log(min);
    let sec = s1 < 10 ? "0" + s1 : s1;
    let mill = m1 < 10 ? "0" + m1 : m1; 
    minute.innerHTML = `${min}`;
    second.innerHTML = `${sec}`;
    millisecond.innerHTML = `${mill}`;
}




// function stopwatch(){
    
//     if(minute < 10){
//         document.querySelector('.minute').innerText = '0' + minute;
//     } else{
//         document.querySelector('.minute').innerText = minute;
//     }
//     if(second < 10){
//         document.querySelector('.second').innerText = '0' + second;
//     } else{
//         document.querySelector('.second').innerText = second;
//     }
//     if(millisecond < 10){
//         document.querySelector('.millisecond').innerText = '0' + millisecond;
//     } else{
//         document.querySelector('.millisecond').innerText = millisecond;
//     }

    
// }


// setInterval(function(){stopwatch()},100);

