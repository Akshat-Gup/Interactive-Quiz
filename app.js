//Variable Initialisation
const correctAnswers = ["A","A","A","A"]; 
const userForm = document.querySelector(".quiz-form");
const resultBlock = document.querySelector(".result");
const scoreHTML = document.querySelector(".score");
const errorBlock = document.querySelector(".errorBlock");
const quizSection = document.querySelector("body > div.quiz.w-70.m-5.shadow.bg-white.rounded.my-0");
const nextSteps = document.querySelector(".next");

userForm.addEventListener("submit", event => {
	event.preventDefault();
	let userScore = 0;
	const maxPossibleScore = 4;
	const userOptionsSelected = [userForm.q1.value,userForm.q2.value,userForm.q3.value,userForm.q4.value];
	userOptionsSelected.forEach((answer, index) => {
		if (answer === "") {
			scrollTo({
				top: 0,
				behavior: "smooth"
			});
			errorBlock.classList.remove("d-none");
		} else if (answer === correctAnswers[index]) {
			userScore+=1;
		}
	});
	if (errorBlock.classList.contains("d-none")) {
		scrollTo(0,0);
		userScore = Math.round(userScore/maxPossibleScore*100); 
		resultBlock.classList.remove("d-none");
		let countUp = 0;
		let displayScore = setInterval(() => {
			scoreHTML.innerText = countUp;
			if (countUp===userScore) {
				flag = true;
				clearInterval(displayScore);
			} else {
				countUp++;
			}
		},20);
		nextSteps.classList.remove("d-none");
		quizSection.classList.add("d-none");

		
	}
});