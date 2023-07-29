const userId = document.querySelector(".addInfo");
const userPass = document.querySelector("#addPass");
const accSection = document.querySelector(".account_section");
const addAccBtn = document.querySelector(".addBtn");

addAccBtn.addEventListener("click", (e) => {
	if (userId.value == "" || userPass.value == "") {
		e.preventDefault;
	} else {
		let findData = data.find((id) => {
			return userId.value == id.contact && userPass.value == id.password;
		});
		console.log(findData.surrName);
		if (!findData) {
			alert("sai tai khoan hoac mat khau");
		} else {
			accSection.innerHTML += `
            <div class="account_box">
                <img src="assets/abstract-user-flat-4.png" alt="" />
                <p>${findData.surrName}</p>
            </div>`;

			addModal.style.display = "none";
		}
	}
});

// console.log(data[0].surrName);
