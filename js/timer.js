/**
 * 2023.11.22
 * 소멘텀 메인에 뜨는 시계
 */
//시간 <h2 id="clock">00:00:00</h2>
const clock = document.getElementById("clock");

function getClock() {
    const date = new Date()
    const hour = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hour} : ${minute} : ${second}`;
    
}
getClock();
setInterval(getClock, 1000);

