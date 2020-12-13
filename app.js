const correctAnswers = ["B","A","B","B"];
const userForm = document.querySelector(".quiz-form");
const resultBlock = document.querySelector(".result");
const scoreHTML = document.querySelector(".score");
const errorBlock = document.querySelector(".errorBlock")
userForm.addEventListener("submit", event => {
	event.preventDefault();
	let userScore = 0;
	const maxScore = 4;
	const userOptionsSelected = [userForm.q1.value,userForm.q2.value,userForm.q3.value,userForm.q4.value];
	console.log(userOptionsSelected);
	userOptionsSelected.forEach((answer, index) => {
		if (answer === "") {
			scrollTo(0,0);
			errorBlock.classList.remove("d-none");
		} else if (answer === correctAnswers[index]) {
			userScore+=1;
		}
	});
	if (errorBlock.classList.contains("d-none")) {
		scrollTo(0,0);
		userScore = Math.round(userScore/maxScore*100); 
		resultBlock.classList.remove("d-none");
		let countUp = 0;
		let displayScore = setInterval(() => {
			scoreHTML.innerText = countUp;
			if (countUp===userScore) {
				clearInterval(displayScore);
			} else {
				countUp++;
			}
		},20);
	}
});