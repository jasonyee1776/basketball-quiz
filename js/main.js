// add background image
var body = document.body
body.style.backgroundImage = "url('img/hardwood.jpg')";
// add margins
body.classList.add("m-4");

// store 10 questions and answers in an array of objects

var content = [
	{
		question: "1) Who invented basketball?",
		img: "img/old-bball.png",
		answer0: "Michael Jordan",
		answer1: "Donald Stern",
		answer2: "The Greeks",
		answer3: "James Naismith",
		realAnswer: "James Naismith"

	},
	{
		question: "2) Who was the only NBA player to ever score 100 points in a single game?",
		img: "img/wilt.png",
		answer0: "Wilt Chamberlin",
		answer1: "Michael Jordan",
		answer2: "Kobe Bryant",
		answer3: "Magic Johnson",
		realAnswer: "Wilt Chamberlin"

	},
	{
		question: "3) Which player scored 81 points against the Toronto raptors?",
		img: "img/mask.jpg",
		answer0: "Larry Bird",
		answer1: "Kobe Bryant",
		answer2: "Wilt Chamberlin",
		answer3: "Reggie Miller",
		realAnswer: "Kobe Bryant"

	},
	{
		question: "3) Which NBA team won the 1974-75 NBA Championship?",
		img: "img/trophy.jpg",
		answer0: "Celtics",
		answer1: "Warriors",
		answer2: "Lakers",
		answer3: "Bullets",
		realAnswer: "Warriors"
		
	},
	{
		question: "4) How far is the NBA 3 point line from the basket?",
		img: "img/three-point.jpg",
		answer0: "23ft 8in",
		answer1: "23ft 5in",
		answer2: "23ft 9in",
		answer3: "23ft 7in",
		realAnswer: "23ft 9in"
		
	},
	{
		question: "5) Which NBA coach holds the record for most wins?",
		img: "img/coach.gif",
		answer0: "Pat Riley",
		answer1: "Greg Popovich",
		answer2: "Don Nelson",
		answer3: "Phil Jackson",
		realAnswer: "Don Nelson"
		
	},
	{
		question: "6) Which NBA player holds the most points scored in an entire career?",
		img: "img/counter.gif",
		answer0: "Kareem Abdul-Jabbar",
		answer1: "Michael Jordan",
		answer2: "Bill Russell",
		answer3: "Wilt Chamberlin",
		realAnswer: "Kareem Abdul-Jabbar"
	
	},
	{
		question: "7) Who is the youngest MVP?",
		img: "img/mvp.jpg",
		answer0: "Kevin Durant",
		answer1: "Derrick Rose",
		answer2: "Lebron James",
		answer3: "Grant Hill",
		realAnswer: "Derrick Rose"
	},
	{
		question: "8) Whis is the highest paid NBA player in history?",
		img: "img/paid.jpg",
		answer0: "Kobe Bryant",
		answer1: "Lebron James",
		answer2: "James Harden",
		answer3: "Kevin Garnett",
		realAnswer: "Kevin Garnett"

	},	
	{
		question: "9) Who was the tallest NBA player?",
		img: "img/tall.jpg",
		answer0: "Shawn Bradley",
		answer1: "Yao Ming",
		answer2: "Boban Marjanović",
		answer3: "Manute Bol",
		realAnswer: "Manute Bol"
	}
]
// ensure questions/answers are beign stored/accessed properly
console.log(content[2].question);

// create parent div element
var contentEl = document.createElement("div");
contentEl.id = "quiz";

// for loop to create question (h2), answer (select/option), and image (img) element and add ID to each element
for (var i = 0; i < content.length; i++) {
	var questionEl = document.createElement("h2");
	questionEl.id = "q" + i;
	var imageEl = document.createElement("img");
	imageEl.id = "i" + i;
	contentEl.appendChild(questionEl);
	contentEl.appendChild(imageEl) 
	console.log(questionEl);
	// create dropdown SELECT and OPTION element
	var answerEl = document.createElement("select");
	var answerOption0 = document.createElement("option");
	var answerOption1 = document.createElement("option");
	var answerOption2 = document.createElement("option");
	var answerOption3 = document.createElement("option");

	// give unique ID to each OPTION element
	answerOption0.id = "aa" + i;
	answerOption1.id = "ab" + i;
	answerOption2.id = "ac" + i;
	answerOption3.id = "ad" + i;
	// append OPTIONS to SELECT element
	answerEl.appendChild(answerOption0);
	answerEl.appendChild(answerOption1);
	answerEl.appendChild(answerOption2);
	answerEl.appendChild(answerOption3);

	// add Bootstrap classes to make RWD and mobile friendly
	questionEl.classList.add("my-3", "col-sm-12");
	// add Bootstrap classes to make RWD and mobile friendly
	answerEl.classList.add("my-3" , "col-sm-12", "w-25", "d-block");
	contentEl.appendChild(answerEl);
}

// append parent div to body of Document
document.body.appendChild(contentEl);

// loop questions to be DISPLAYED onto docuemnt 
for (var i=0; i<content.length; i++) {
	var getQuestions = document.getElementById("q"+i);
	getQuestions.innerHTML = content[i].question;
	console.log(getQuestions);
}

// loop answers optiosn to be DISPLAYED onto document
for (i = 0; i < content.length; i++) {
	var getAnswerOption0 = document.getElementById("aa"+i);
	var getAnswerOption1 = document.getElementById("ab"+i);
	var getAnswerOption2 = document.getElementById("ac"+i);
	var getAnswerOption3 = document.getElementById("ad"+i);
	getAnswerOption0.textContent = content[i].answer0;
	getAnswerOption1.textContent = content[i].answer1;
	getAnswerOption2.textContent = content[i].answer2;
	getAnswerOption3.textContent = content[i].answer3;
}

// loop images to be DISPLAYED and add Styling
for (var i = 0; i < content.length; i++) {
	var getImage = document.getElementById("i"+i);
	getImage.src = content[i].img;
	getImage.classList.add("w-25", "imgae-size");
}

// create submit button
var submitButton = document.createElement("button");
submitButton.classList.add( "btn", "btn-success", "mt-4");
submitButton.textContent = "Submit Quiz";
submitButton.id = "submitButton";	
document.getElementById("scoreBoard").appendChild(submitButton);



//////////////////////////// CONFETTI ////////////////////////////////////
function confetti() {
	(function() {
	    // globals
	    var canvas;
	    var ctx;
	    var W;
	    var H;
	    var mp = 150; //max particles
	    var particles = [];
	    var angle = 0;
	    var tiltAngle = 0;
	    var confettiActive = true;
	    var animationComplete = true;
	    var deactivationTimerHandler;
	    var reactivationTimerHandler;
	    var animationHandler;

	    // objects

	    var particleColors = {
	        colorOptions: ["DodgerBlue", "OliveDrab", "Gold", "pink", "SlateBlue", "lightblue", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"],
	        colorIndex: 0,
	        colorIncrementer: 0,
	        colorThreshold: 10,
	        getColor: function () {
	            if (this.colorIncrementer >= 10) {
	                this.colorIncrementer = 0;
	                this.colorIndex++;
	                if (this.colorIndex >= this.colorOptions.length) {
	                    this.colorIndex = 0;
	                }
	            }
	            this.colorIncrementer++;
	            return this.colorOptions[this.colorIndex];
	        }
	    }

	    function confettiParticle(color) {
	        this.x = Math.random() * W; // x-coordinate
	        this.y = (Math.random() * H) - H; //y-coordinate
	        this.r = RandomFromTo(10, 30); //radius;
	        this.d = (Math.random() * mp) + 10; //density;
	        this.color = color;
	        this.tilt = Math.floor(Math.random() * 10) - 10;
	        this.tiltAngleIncremental = (Math.random() * 0.07) + .05;
	        this.tiltAngle = 0;

	        this.draw = function () {
	            ctx.beginPath();
	            ctx.lineWidth = this.r / 2;
	            ctx.strokeStyle = this.color;
	            ctx.moveTo(this.x + this.tilt + (this.r / 4), this.y);
	            ctx.lineTo(this.x + this.tilt, this.y + this.tilt + (this.r / 4));
	            return ctx.stroke();
	        }
	    }

	    $(document).ready(function () {
	        SetGlobals();
	        InitializeButton();
	        InitializeConfetti();

	        $(window).resize(function () {
	            W = window.innerWidth;
	            H = window.innerHeight;
	            canvas.width = W;
	            canvas.height = H;
	        });

	    });

	    function InitializeButton() {
	        $('#stopButton').click(pauseConfetti);
	        $('#startButton').click(RestartConfetti);
	        $('#redoButton').click(DeactivateConfetti);
	    }

	    function SetGlobals() {
	        canvas = document.getElementById("canvas");
	        ctx = canvas.getContext("2d");
	        W = window.innerWidth;
	        H = window.innerHeight;
	        console.log(H);
	        canvas.width = W;
	        canvas.height = H;
	    }

	    function InitializeConfetti() {
	        particles = [];
	        animationComplete = false;
	        for (var i = 0; i < mp; i++) {
	            var particleColor = particleColors.getColor();
	            particles.push(new confettiParticle(particleColor));
	        }
	        StartConfetti();
	    }

	    function Draw() {
	        ctx.clearRect(0, 0, W, H);
	        var results = [];
	        for (var i = 0; i < mp; i++) {
	            (function (j) {
	                results.push(particles[j].draw());
	            })(i);
	        }
	        Update();

	        return results;
	    }

	    function RandomFromTo(from, to) {
	        return Math.floor(Math.random() * (to - from + 1) + from);
	    }


	    function Update() {
	        var remainingFlakes = 0;
	        var particle;
	        angle += 0.01;
	        tiltAngle += 0.1;

	        for (var i = 0; i < mp; i++) {
	            particle = particles[i];
	            if (animationComplete) return;

	            if (!confettiActive && particle.y < -15) {
	                particle.y = H + 100;
	                continue;
	            }

	            stepParticle(particle, i);

	            if (particle.y <= H) {
	                remainingFlakes++;
	            }
	            CheckForReposition(particle, i);
	        }

	        if (remainingFlakes === 0) {
	            StopConfetti();
	        }
	    }

	    function CheckForReposition(particle, index) {
	        if ((particle.x > W + 20 || particle.x < -20 || particle.y > H) && confettiActive) {
	            if (index % 5 > 0 || index % 2 == 0) //66.67% of the flakes
	            {
	                repositionParticle(particle, Math.random() * W, -10, Math.floor(Math.random() * 10) - 20);
	            } else {
	                if (Math.sin(angle) > 0) {
	                    //Enter from the left
	                    repositionParticle(particle, -20, Math.random() * H, Math.floor(Math.random() * 10) - 20);
	                } else {
	                    //Enter from the right
	                    repositionParticle(particle, W + 20, Math.random() * H, Math.floor(Math.random() * 10) - 20);
	                }
	            }
	        }
	    }
	    function stepParticle(particle, particleIndex) {
	        particle.tiltAngle += particle.tiltAngleIncremental;
	        particle.y += (Math.cos(angle + particle.d) + 3 + particle.r / 2) / 2;
	        particle.x += Math.sin(angle);
	        particle.tilt = (Math.sin(particle.tiltAngle - (particleIndex / 3))) * 15;
	    }

	    function repositionParticle(particle, xCoordinate, yCoordinate, tilt) {
	        particle.x = xCoordinate;
	        particle.y = yCoordinate;
	        particle.tilt = tilt;
	    }

	    function StartConfetti() {
	        W = window.innerWidth;
	        H = window.innerHeight;
	        canvas.width = W;
	        canvas.height = H;
	        (function animloop() {
	            if (animationComplete) return null;
	            animationHandler = requestAnimFrame(animloop);
	            return Draw();
	        })();
	    }

	    function ClearTimers() {
	        clearTimeout(reactivationTimerHandler);
	        clearTimeout(animationHandler);
	    }

	    function DeactivateConfetti() {
	        confettiActive = false;
	        ClearTimers();

	        // logic to remove both start and stop buttons 
	        var stopButton = document.getElementById("stopButton");
	        var startButton = document.getElementById("startButton");
	       	var redoButton = document.getElementById("redoButton");


	        stopButton.remove();
	        startButton.remove();
	       	redoButton.remove();



	        // logic for redo button to dispay quiz
	        var quiz = document.getElementById("quiz");
			submitButton.style.display = "none";
			var scoreBoard = document.getElementById("scoreBoard");
			quiz.style.display = "block";
			submitButton.style.display = "block";
			scoreBoard.style.display = "block";

			// remove winning elelments/styles and add quiz elements/styles
			document.getElementById("winner").remove(); 
			body.style.backgroundImage = "url('img/hardwood.jpg')";
			document.getElementById("title").title.display = "block";


		}

	    function StopConfetti() {
	        animationComplete = true;
	        if (ctx == undefined) return;
	        ctx.clearRect(0, 0, W, H);
	    }

	    function pauseConfetti() {
	    	document.body.style.background = "black";
	    	document.getElementById("title").className = "d-none"
	        confettiActive = false;
	        ClearTimers();
	    }

	    function RestartConfetti() {
	    	document.body.style.backgroundImage = "url('img/party-court.jpg')";
	  		document.getElementById("title").classList.add("d-block", "text-center") 

	        ClearTimers();
	        StopConfetti();
	        reactivationTimerHandler = setTimeout(function () {
	            confettiActive = true;
	            animationComplete = false;
	            InitializeConfetti();
	        }, 100);

	    }

	    window.requestAnimFrame = (function () {
	        return window.requestAnimationFrame || 
	        window.webkitRequestAnimationFrame || 
	        window.mozRequestAnimationFrame || 
	        window.oRequestAnimationFrame || 
	        window.msRequestAnimationFrame || 
	        function (callback) {
	            return window.setTimeout(callback, 1000 / 60);
	        };
	    })();
	})();
}
///////////// Logic for when User gets all answers right ///////////////

function allRight() {
	console.log("you got it buddy");
	var quiz = document.getElementById("quiz");
	quiz.style.display = "none";
	var div = document.createElement("div");
	div.id = "content";

	var divButton = document.createElement("div");
	divButton.id = "buttonContainer";

	var stopButton = document.createElement("button");
	var startButton = document.createElement("button");
	stopButton.id = "stopButton";
	startButton.id = "startButton";
	var redoButton = document.createElement("button");
	redoButton.id = "redoButton";
	startButton.classList.add("btn", "btn-warning");
	stopButton.classList.add("btn", "btn-dark");
	redoButton.classList.add("d-block", "mx-auto", "my-5", "btn", "btn-dark") ;


	stopButton.textContent = "Party Off";
	startButton.textContent = "Party On";
	redoButton.textContent = "From the top!";

	
	div.classList.add("container-fluid")

	divButton.appendChild(stopButton);
	divButton.appendChild(startButton);
	divButton.appendChild(redoButton);

	div.appendChild(divButton);
	document.body.appendChild(div);
	submitButton.style.display = "none";
	var scoreBoard = document.getElementById("scoreBoard");
	scoreBoard.style.display = "none";
	// make heading change color
	var title = document.getElementById("title");
	title.classList.add("party");
	confetti()
}




// Count right and wrong answers when submit button is clicked 
submitButton.addEventListener ("click", function() {
	// counter for right and wrong answer
	var right = 0;
	var wrong = 0;

	for (var i=0; i<content.length; i++) {
		var getInput = document.getElementsByTagName("select")[i].value;
		console.log(getInput);
		var answers = content[i].realAnswer;
		var questions = document.getElementById("q"+[i]);
		if (answers===getInput) {
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

	//// Logic when user gets all qestions correct, CONFETTI PARTY ////

		if (right==content.length) {
			allRight();
			body.style.backgroundImage = "url('img/party-court.jpg')";
			body.classList.add("party");
			var winningText = document.createElement("h1");
			winningText.id = "winner";
			winningText.textContent = "You got all the answers right, baby! Your're a genius baller!"
			var title = document.getElementById("title");
			title.appendChild(winningText);
			winningText.classList.add("mt-5", "animated", "bounce");
		}
	}	
})














