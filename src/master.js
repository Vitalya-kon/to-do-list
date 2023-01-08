let list = document.querySelector('#tasks'); 
let todos;
function toDoLocal(){
    todos = list.innerHTML;
    localStorage.setItem("todos" , todos);
}

function buttons() {
    if (document.querySelector(".task")) {
            let task = document.querySelectorAll(".task");
            let del = document.querySelectorAll(".delete");
            let done = document.querySelectorAll(".done");
            let name = document.querySelectorAll("#taskname");
            for(let i = 0; i < task.length; i++){

                del[i].onclick = () =>{
                    console.log(1);
                    task[i].remove();
                    toDoLocal();
                }
                done[i].onclick = () =>{
                    console.log(1);
                    if (!name[i].classList.contains("lineThrough")) {
                       name[i].classList.add("lineThrough");
                       toDoLocal();
                    }
                    else{
                       name[i].classList.remove("lineThrough"); 
                       toDoLocal();
                    }
                    
                }

            }
} 
}

document.querySelector('#push').onclick =() => add();
document.querySelector('#newtask input').onkeydown = e =>{
    if (e.keyCode === 13) {
        add();
    }
}
function add (){
    let input = document.querySelector('#newtask input'); 
    let tasks =  document.querySelector('#tasks'); 
    if(input.value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        tasks.innerHTML += `
            <li class="task">
                <span id="taskname">
                    ${input.value}
                </span>
                <div class= 'buttons'>
                    <span class = "done">
                        <img src="src/img/done.svg"/>
                    </span>   
                    <span class="delete">
                        <img src="src/img/remove.svg"/>
                    </span>
                </div>
            </li>
        `;
        toDoLocal();
        input.value = "";
        buttons();   
    }
   
}
 if (localStorage.getItem("todos")) {
    list.innerHTML = localStorage.getItem("todos"); 
}
buttons();


// let tasks =  document.querySelector('#tasks');
// let mask = 'tdl_';

// function schowTasks(){
//     // узнаем размер хранилища
//     let storage_size = localStorage.length;
//     // Если в хранилище что-то есть
//     if (storage_size > 0 ) {
//         // то берём и добавляем это в задачи  
//         for (let i = 0; i < storage_size; i++) {
//             let key = localStorage.key[i];
//             if (key.indexOf(mask) == 0) {
//                 let el = document.createElement('li');
//                 el.classList.add('tdItem');
//                 el.setAttribute('data-itemid', key);
//                 el.innerText = localStorage.getItem(key);
//                 tasks.appendChild(el);
//             }            
//         }
//     }
// }
//  // Сразу вызываем эту функцию, вдруг в памяти уже остались задачи с прошлого раза
// schowTasks();
//  // Следим, когда пользователь напишет новую задачу в поле ввода и нажмёт Enter
//  document.querySelector('#newtask input').onkeydown = e =>{
//     if (e.keyCode !== 13) return;
//     let str = e.target.value;
//     str = '';
//      // Если в поле ввода было что-то написано — начинаем обрабатывать
//     if (str.length > 0) {
//         let number_id = 0;
//         tasks.children.forEach((index,elem) => {
//             let element_id = elem.getAttribute('data-itemid').slice(4);
//             if (element_id > number_id) number_id = element_id;
    
//         })
//         number_id++;
//         // Отправляем новую задачу сразу в память
//         localStorage.setItem(mask + number_id, str);
//         // и добавляем её в конец списка
//         let el = document.createElement('li');
//         el.classList.add('tdItem');
//         el.setAttribute('data-itemid', mask + number_id);
//         el.innerText = str;
//         tasks.appendChild(el);
//     }
//  }