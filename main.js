let taskInput = document.querySelector(".addTask");
let taskList = document.querySelector(".taskList");
let taskText = document.getElementById("subTask");

//=============add task================
taskInput.addEventListener("click", () => {
	if (taskText.value == "") {
		alert("required task");
		return;
	}
	taskList.innerHTML += `
    <div class="task-content">
		<span class="task-decor">${taskText.value}</span
		><button onclick = remove(this) class="delTask"><i class="fa-solid fa-trash"></i></button>
	</div>
    `;
	//==================reset input=========================
	taskText.value = "";
	taskText.focus();

	// =============text decor for done-task=================
	let taskArea = document.querySelectorAll(".task-content");
	for (let i = 0; i < taskArea.length; i++) {
		let taskDecor = document.querySelectorAll(".task-decor");
		taskArea[i].addEventListener("click", () => {
			taskDecor[i].classList.toggle("done");
		});
	}
});

function remove(e) {
	e.parentNode.remove();
}

//=============update 15/7============
