/**
 * 2023.11.22
 * 당신의 이름을 적어 주세요.
 * 라고 사용자에게 물어 답변을 화면에 표시한다.
 */
//form
const frmLogin = document.getElementById("Login");
const inputLogin = frmLogin.querySelector("input");
//h1
const h1 = document.getElementById("h1");
//className 상수화
const HIDDEN_CLASSNAME = "hidden";
const KEY_USERNAME = "userName";

function clickLogin(event){
    event.preventDefault();
    //form은 숨긴다 
    frmLogin.classList.add(HIDDEN_CLASSNAME);
    const userName = inputLogin.value;
    localStorage.setItem(KEY_USERNAME, userName);
    //h1은 보여주고
    displayGreeting(userName);    
}

/**
 * 인사를 출력하는 함수
 * @param {*} argName 
 */
function displayGreeting(argName){
    h1.classList.remove(HIDDEN_CLASSNAME);
    h1.innerText = `${argName}님, 반가와요.`; 
}

/**
 * 로컬 스토리지에서 가져온 사용자 이름
 */
const lsUserName = localStorage.getItem(KEY_USERNAME);

if (lsUserName === null) {
    frmLogin.classList.remove(HIDDEN_CLASSNAME);
    frmLogin.addEventListener("submit", clickLogin);
}else {
    displayGreeting(lsUserName);
}



