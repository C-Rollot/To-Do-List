const app = {

    //Bouton de validation
    submit : document.getElementById("add"),
    
        addTask : () => {
            //Récupération des éléments HTML
            let input = document.getElementById("input");
            let list = document.getElementById("list");

            //Création de la tâche et des boutons
            let newTask = document.createElement("p");
            let doneButton = document.createElement("button");
            let deleteButton = document.createElement("button");

            newTask.textContent = input.value;
            doneButton.textContent = "/";
            deleteButton.textContent = "X";

            list.appendChild(newTask);
            list.appendChild(doneButton);
            list.appendChild(deleteButton);

            input.value = "";

            //Fonction de surlignage des tâches
            function line_through() {
                newTask.style.textDecoration = "line-through";
            }

            //Fonction d'effacement des tâches
            function delete_task() {
                newTask.style.display = "none";
                doneButton.style.display = "none";
                deleteButton.style.display = "none";
            }

            //Event listeners
            doneButton.addEventListener("click", line_through);
            deleteButton.addEventListener("click", delete_task);
        },

    init : () => {
        addTaskCallback : app.submit.addEventListener("click", app.addTask)
    }
}

app.init();