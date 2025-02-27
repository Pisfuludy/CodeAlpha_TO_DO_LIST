
const listInput = document.getElementById("task");
const addButton = document.getElementById("add");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", () => {
    const listText = listInput.value.trim();
    if (listText !== " ") {
        createList(listText);
        listInput.value = "";
    }
});

function createList(text) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<span>${text}</span> <button class="delete">Delete</button>`;

    taskList.appendChild(listItem);

    const deleteButton = listItem.querySelector(".delete");
    deleteButton.addEventListener("click", () => {
        listItem.remove();
    });

    listItem.addEventListener("click", () => {
        listItem.classList.toggle("done");
    });
}