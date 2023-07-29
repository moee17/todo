const sigUpModal = document.getElementById("signIpModal");
const addModal = document.getElementById("addAccModal");
const signUpBtn = document.querySelector(".signupBtn");
const addBtn = document.querySelector(".add_acc_box");
const closeModal = document.querySelectorAll(".closeBox");
const myModal = document.querySelectorAll(".myModal");

signUpBtn.addEventListener("click", () => {
	signUpModal.style.display = "block";
});

addBtn.addEventListener("click", () => {
	addModal.style.display = "block";
});

for (let i = 0; i < closeModal.length; i++) {
	closeModal[i].addEventListener("click", () => {
		myModal[i].style.display = "none";
	});
}

// ============ end modal section =====================

// ============ sign up date section===================

const createAccBtn = document.querySelector(".createAccBtn");
const userFirstName = document.querySelector(".signUpFirstname");
const userSurrName = document.querySelector(".signUpSurrname");
const userContact = document.querySelector(".signUpContact");
const userPassword = document.querySelector(".signUpPass");

let signUpUser = () => {
	// ====== fix lỗi thông tin trống
	if (
		userFirstName.value == "" ||
		userSurrName.value == "" ||
		userContact.value == "" ||
		userPassword.value == ""
	) {
		alert("nhập thông tin vào");
		return;
	}
	// ====== khởi tạo user
	let userInfo = localStorage.getItem("user");

	if (userInfo == null) {
		userInfo = [];
	} else {
		userInfo = JSON.parse(userInfo);
	}

	let info = {
		firstname: userFirstName.value,
		surrName: userSurrName.value,
		contact: userContact.value,
		password: userPassword.value,
	};
	// bug trùng thông tin vẫn ăn local
	for (let i = 0; i < userInfo.length; i++) {
		let crrUser = userInfo[i];
		if (crrUser.contact == userContact.value) {
			alert("trùng id kìa");
			return;
		}
	}

	// add user vào lưu trữ
	userInfo.push(info);

	localStorage.setItem("user", JSON.stringify(userInfo));

	// tắt modal sign up
	signUpModal.style.display = "none";

	// làm trắng input
	userFirstName.value = "";
	userSurrName.value = "";
	userContact.value = "";
	userPassword.value = "";
};

createAccBtn.addEventListener("click", signUpUser);

//================================sign in section======================

const signInBtn = document.querySelector(".loginBtn");
const signInInfo = document.querySelector(".signInInfo");
const signInPass = document.querySelector(".password");
const wrongInfo = document.querySelector(".wrongInfo");

let user = localStorage.getItem("user");
let data = JSON.parse(user);

// ===============================đã hoàn thành

signInBtn.addEventListener("click", function (e) {
	if (signInInfo.value == "" || signInPass.value == "") {
		e.preventDefault;
	} else {
		let a = data.find((id) => {
			return signInInfo.value == id.contact && signInPass.value == id.password;
		});
		if (a) {
			location.pathname = "index.html";
			return;
		} else {
			wrongInfo.style.display = "block";
		}
	}
});
// ============================== cũng được nhưng vẫn chưa tối ưu
// signInBtn.addEventListener("click", (e) => {
// 	if (signInInfo.value == "" || signInPass.value == "") {
// 		alert("nhap thông tin vào");
// 		e.preventDefault;
// 	} else {
// 		logIn();
// 	}
// });

// function logIn() {
// 	let id = "";
// 	let pass = "";
// 	for (let i in data) {
// 		pass = data[i].password;
// 		id = data[i].contact;
// 		if (signInInfo.value == id && signInPass.value == pass) {
// 			location.pathname = "index.html";
// 			break;
// 		} else {
// 			wrongInfo.style.display = "block";
// 		}
// 	}
// }

//==============asdasdfa
// for (let i = 0; i < data.length; i++) {
// 	if (
// 		!(
// 			data[i].contact == signInInfo.value &&
// 			data[i].password == signInPass.value
// 		)
// 	) {
// 		// debugger;
// 		wrongInfo.style.display = "block";
// 		return;
// 	} else {
// 		// alert("sai tài khoản hoặc mật khẩu");
// 		location.pathname = "index.html";
// 	}
// }

//===========================add account========================
