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
	// add Bootstrap classes to make RWD and mobile friendly
	questionEl.classList.add("my-3", "col-sm-12");
	// add Bootstrap classes to make RWD and mobile friendly
	answerEl.classList.add("my-3" , "col-sm-12");
	contentEl.appendChild(answerEl);
}

// append parent div to body
document.body.appendChild(contentEl);

// loop questions to be DISPLAYED onto docuemnt 
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

// Count right and wrong answers when submit button is clicked 
submitButton.addEventListener ("click", function() {
	// counter for right and wrong answer
	var right = 0;
	var wrong = 0;

	for (var i=0; i<content.length; i++) {
		var getInput = document.getElementById("a"+i).value;
		var answers = content[i].answer;
		var questions = document.getElementById("q"+[i]);
		if (answers.toLowerCase()===getInput.toLowerCase()) {
			//style question green
			questions.classList.add("right", "my-3", "col-sm-12");
			questions.classList.remove("wrong");
			right++;
		} else {
			//style question red
			questions.classList.add("wrong", "my-3", "col-sm-12");
			questions.classList.remove("right");
			wrong++;
		};
		console.log(right);
		document.getElementById("right").textContent = right;
		document.getElementById("wrong").textContent = wrong;
	}	
})

///////////////////// Style document with JS ///////////////////////
// add background image
var body = document.body
body.style.backgroundImage = "url('img/hardwood.jpg')";
// add margins
body.classList.add("m-4");


// 

/////////// Add Bootstrap to make RWD and mobile-friendly  ////////




