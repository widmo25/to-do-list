{
    const tasks = [

    ]

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        })
    }

    const removeTask = (index) =>{
        tasks.splice(index,1 )
        render();
    }

    const toggleDoneTask = (index) =>{
        tasks[index].done = !tasks[index].done;
        render();
    }

    const inputFocus = () =>{
        const change = document.querySelector(".js-newTask");
        change.focus();
    }

    const resetForm = () =>{
        document.querySelector(".js-form").reset();
    }

    const bindEvent = () =>{
        const removeButtons = document.querySelectorAll(".js-remove");
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () =>{
                removeTask(index);
            });
        });
        
        const toggleButtons = document.querySelectorAll(".js-done");
        toggleButtons.forEach((toggleButton, index) => {
            toggleButton.addEventListener("click", () =>{
                toggleDoneTask(index);
            });
        });

        const formButton = document.querySelector(".js-button");
        formButton.addEventListener("click", inputFocus);
     
    }
        
    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        if (newTaskContent === "") {
            return
        }else{
            resetForm();
        }
    
        addNewTask(newTaskContent);
        render();
    }

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <li class="list__item"${task.done ? " style=\"text-decoration: line-through\"" : ""}>
                <button${task.done ? " style=\"color:white\"" : " style=\"color:#09d123\""} class="list__itemButton list__itemButton--done js-done">✔</button>
                ${task.content}
                <button class="list__itemButton list__itemButton--remove js-remove">🗑</button>
                </li>
                
            `;
        };
        document.querySelector(".js-tasks").innerHTML = htmlString;
        bindEvent();
    }

    const init = () => {
        render();
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);

    }
    init();
}

