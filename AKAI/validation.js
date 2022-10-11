const first_name = document.getElementById("first-name");
const last_name = document.getElementById("last-name");
const email = document.getElementById("email");
const blad = document.getElementById("blad");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
	let powiadomienie = [];
	if (
		first_name.value === "" ||
		first_name.value == null ||
		last_name.value === "" ||
		last_name.value == null ||
		email.value === "" ||
		email.value == null
	) {
		powiadomienie.push("Należy uzupełnić wszystkie wymagane dane! <br/>");
	}
	if (/\d/.test(first_name.value)) {
		powiadomienie.push("Imię nie może zawierać liczb!<br/>");
	}
	if (/\d/.test(last_name.value)) {
		powiadomienie.push("Nazwisko nie może zawierać liczb!<br/>");
	}
	if (
		document.getElementById("frontend-checkbox").checked == false &&
		document.getElementById("backend-checkbox").checked == false &&
		document.getElementById("mobile-checkbox").checked == false &&
		document.getElementById("graphics-checkbox").checked == false
	) {
		powiadomienie.push(
			"Proszę wybrać przynajmniej jedną interesującą cię sekcję!<br/>"
		);
	}
	if (powiadomienie.length > 0) {
		e.preventDefault();
		blad.style.color = "red";
		blad.style.marginTop = "15px";
		blad.innerHTML = powiadomienie.join("");
	}
});
