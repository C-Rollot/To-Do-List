//Fonction de création de tâche
    function addTask() {
        //Récupération des éléments HTML
        let input = document.getElementById("input").value;
        let list = document.getElementById("list");

        //Création de la tâche et des boutons
        let newTask = document.createElement("p");
        let doneButton = document.createElement("button");
        let deleteButton = document.createElement("button");

        newTask.innerHTML = input;
        doneButton.innerHTML = "/";
        deleteButton.innerHTML = "X";

        list.appendChild(newTask);
        list.appendChild(doneButton);
        list.appendChild(deleteButton);

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
    }

//Bouton de validation
let submit = document.getElementById("add");

//Event listener
submit.addEventListener("click", addTask);
