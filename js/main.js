// store 10 questions and answers in an array of objects

var content = [
	{
		question: "What is the best NBA team?",
		img: "img/ ",
		answer: "Warriors"
	},
	{
		question: "What is the best NBA team?",
		img: "img/ ",
		answer: "Warriors"
	},
	{
		question: "What is the best NBA team?",
		img: "img/ ",
		answer: "Warriors"
	},
	{
		question: "What is the best NBA team?",
		img: "img/ ",
		answer: "Warriors"
	},
	{
		question: "What is the best NBA team?",
		img: "img/ ",
		answer: "Warriors"
	},
	{
		question: "What is the best NBA team?",
		img: "img/ ",
		answer: "Warriors"
	},
	{
		question: "What is the best NBA team?",
		img: "img/ ",
		answer: "Warriors"
	},
	{
		question: "What is the best NBA team?",
		img: "img/ ",
		answer: "Warriors"
	},
	{
		question: "What is the best NBA team?",
		img: "img/ ",
		answer: "Warriors"
	},
	{
		question: "What is the best NBA team?",
		img: "img/ ",
		answer: "Warriors"
	}
]
// ensure questions/answers are beign stored/accessed properly
console.log(content[2].question);

// create elements for question, answer, image
var contentEl = document.createElement("div");
var imageEl = document.createElement("img");


// for loop to create question (h2) answer element and add id to each
for (var i = 0; i < content.length; i++) {
	var questionEl = document.createElement("h2");
	questionEl.id = "q" + i;
	contentEl.appendChild(questionEl);
	console.log(questionEl);
	var answerEl = document.createElement("input");
	answerEl.id = "a" + i;
	contentEl.appendChild(answerEl);
}

// append parent div to body
document.body.appendChild(contentEl);

// loop questions to be displayed onto docuemnt 
for (var i=0; i<content.length; i++) {
	var getQuestions = document.getElementById("q"+i);
	getQuestions.innerHTML = content[i].question;
	console.log(getQuestions);
}



// create submit button
var submitButton = document.createElement("button");
submitButton.className = "btn, btn-success";
submitButton.textContent = "Submit Quiz";
document.body.appendChild(submitButton);

// Add event listener for submit btn and loop correct answers
submitButton.addEventListener ("click", function() {
	for (var i=0; i<content.length; i++) {
		var getAnswers = document.getElementById("a"+i).value;
		if (getAnswers.toLowerCase()===content[i].answer) {
			//style question green
			document.getElementById("q"+[i]).className = "right";
		} else {
			//style question red
			document.getElementById("q"+[i]).className = "wrong";
		}
	}
})



