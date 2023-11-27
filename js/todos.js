/**
todo.js
 */

const frmTodo = document.getElementById("frmToDo");
const listTodo = document.getElementById("lstToDo");
const inputTodo = document.querySelector("#frmToDo input");
let todos = [];
console.log("let todos", todos);
const KEY_TODOS = "todos";
/**
 *
 *
 */
function saveTodos(){
    localStorage.setItem(KEY_TODOS,JSON.stringify(todos));
    //console.log(todos);

}

/**
 * Todo리스트에서 항목을 삭제한다.
 */
function deleteTodo(event){
   // console.log("delete 함수 시작");
   // console.log(event);
   // console.log(event.target.parentElement);
    const li = event.target.parentElement;
    li.remove();
    //localStorage.removeItem(KEY_TODOS,JSON.stringify(todos))
    //localStorage.setItem(KEY_TODOS,JSON.stringify(todos));
    console.log(li);
    console.log("li의 type",typeof(li));
    console.log("li.id의 type",typeof(li.id));
    console.log(">>>>>>>>>>>", todos);
    todos = todos.filter((item)=> item.id !== parseInt(li.id));
    //todos = todos.filter((todo)=> todo.id !== parseInt(li.id));
    saveTodos();
}
/**
 * todo리스트 목록을 출력한다.
 */
function displayTodo(arg){
    //console.log("hi",arg);
    //ul>li>span
    //li추가
    const li = document.createElement("li");
    li.id = arg.id;
    //span추가
    const span = document.createElement("span");
    //sapn에 할일 추가
    span.innerText = arg.text;
    //X버튼 추가
    const button = document.createElement("button");
    button.innerText="X";
    button.addEventListener("click",deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    listTodo.appendChild(li);

}


/**
* form에 입력된 값을 변수에 저장하고
* form의 내용을 지운다.
* form리스트를 출력하는 함수를 호출한다.
* @param {*} event
*/
function handleSubmitTodo(event){
    event.preventDefault();
    const valueTodo = inputTodo.value;
    //console.log(valueTodo);
    inputTodo.value="";
    console.log(">>>>>>>>>>>>todos", todos)
    const newToDoObj = {
        text: valueTodo,
        id: Date.now(),
    };
    todos.push(newToDoObj);
    //console.log(todos);
    displayTodo(newToDoObj);
    saveTodos();
}

frmToDo.addEventListener("submit",handleSubmitTodo);
const lsSaveTodos =  localStorage.getItem(KEY_TODOS);
if(lsSaveTodos !== null){
   //console.log("lsSaveTodos",lsSaveTodos);
   console.log(JSON.parse(lsSaveTodos));
   const parseLsSaveTodos = JSON.parse(lsSaveTodos);
   todos = parseLsSaveTodos;
   parseLsSaveTodos.forEach(displayTodo);
  // parseLsSaveTodos.forEach(item => {
   // console.log(item);
  // });
}