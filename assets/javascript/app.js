var themeSong = new Audio("assets/images/Seinfeld.mp3");
document.addEventListener("DOMContentLoaded", function(){

function startTimer(){
		timer = setInterval(function(){
            var minutes = Math.floor(timeRemaining/60);
            var seconds = timeRemaining%60;
            if(seconds < 10){
                seconds="0"+seconds;
            }
    		time.textContent = minutes +":"+ seconds;
        if (timeRemaining-- <= 0){
            endGame();
        }
    }, 1000);
}

document.querySelector("aside button").addEventListener("click", startGame);

var guessAnchors = document.querySelectorAll("main a");
for (let i=0; i<guessAnchors.length; i++){
		guessAnchors[i].addEventListener("click", handleGuess);
}

function endGame(){
		clearInterval(timer);
		document.querySelector("aside h1").textContent = Math.round(stats.correct*100/stats.totalQuestions) + "%";
		document.querySelector("aside h2").textContent = "You got " + stats.correct + " out of " + stats.totalQuestions;
        document.querySelector("main").classList.remove("active");
}

function handleGuess(e){
		e.preventDefault();
		var target = e.target;
    while (target.tagName.toLowerCase() !== "a"){
    		target = target.parentNode;
    }
    var	guess = target.getAttribute("href").slice(1);
    if (guess === questions[currentQuestionIndex].correct){
    		//correct guess! :)
        stats.correct++;
    } else {
    		//incorrect guess... :(
        stats.incorrect++;
    }
    //next question index
    currentQuestionIndex++;
    //game over?
    if (currentQuestionIndex === questions.length){
    		endGame();
        return;
    }
    //not over yet, load next question
    nextQuestion();
}

function startGame(){
	currentQuestionIndex = 0;
	stats.correct = 0;
    stats.incorrect = 0;
    timeRemaining = timeLimit;
	document.querySelector("main").classList.add("active");
    nextQuestion();
    startTimer();
    themeSong.play();
    themeSong.addEventListener("ended" , function(){
        themeSong.currentTime = 0;
        themeSong.play();
    });
}

function nextQuestion(){
    q.textContent = questions[currentQuestionIndex].q;
    img.src = questions[currentQuestionIndex].img;
    a.textContent = questions[currentQuestionIndex].a;
    b.textContent = questions[currentQuestionIndex].b;
    c.textContent = questions[currentQuestionIndex].c;
}

var questions= [
				{
            q: "1. Whose appearance at the gym where Elaine works out effectively eliminates her from the contest",
          img: "assets/images/trivia1.webp",
          a: "Denzel Washington",
          b: "JFK, Jr.",
          c: "Pierce Brosnan",
          correct: "b"
        },
        {
        	q: "2. What is on the vanity plates that Kramer accidentally receives from the DMV?",
          img: "assets/images/trivia2.webp",
          a: "BIG BOY",
          b: "ASSMAN",
          c: "Dr Love",
          correct: "b"
        },
         {
            q: "3. Elaine's boyfriend/Jerry's mechanic David Putty is an avid supporter of what professional hockey team?",
          img: "assets/images/trivia3.webp",
          a: "The New Jersey Devils",
          b: "The New York Rangers",
          c: "The New York Islanders",
          correct: "a"
        },
         {
            q: "4. What unreturned library book from 1971 was Jerry being fined for?",
          img: "assets/images/trivia4.webp",
          a: "Madame Bovary",
          b: "Lady Chatterley's Lover",
          c: "Tropic of Cancer",
          correct: "c"
        },
         {
            q: "5. Elaine's boss Mr. Pitt eats what with a fork and knife?",
          img: "assets/images/trivia5.webp",
          a: "Twinkie",
          b: "Snicker's bar",
          c: "Nathan's hot dog",
          correct: "b"
        },
         {
            q: "6. Little Jerry Seinfeld is the name to?",
          img: "assets/images/trivia6.webp",
          a: "Kramer's gamecock",
          b: "Morty and Helen Seinfeld's dachshund",
          c: "Jerry's nickname for his manhood",
          correct: "a"
        },
         {
            q: "7. What restaurant opens in front of Kramer's apartment with an extremely bright neon light?",
          img: "assets/images/trivia7.webp",
          a: "Shake Shack",
          b: "Kenny Rogers Roasters",
          c: "Krispy Creme",
          correct: "b"
        },
         {
            q: "8. Kramer's friend Brody gets Jerry involved in what illegal activity?",
          img: "assets/images/trivia8.webp",
          a: "Shoplifting",
          b: "Selling Cuban cigars",
          c: "Bootlegging films",
          correct: "c"
        },
         {
            q: "9. What would have been Kramer's line in a Woody Allen film? ",
          img: "assets/images/trivia9.webp",
          a: "These pretzels are making me thirsty",
          b: "What time does the bodega on the corner open?",
          c: "Not only an I sure, I'm positive",
          correct: "a"
        },
         {
            q: "10. George is displeased that Elaine thanked Julie (instead of him) for buying what from Monks?",
          img: "assets/images/trivia10.webp",
          a: "A big salad",
          b: "A $5 milkshake",
          c: "A Red velvet cake",
          correct: "a"
        },
		],
    stats = {
    	totalQuestions: questions.length,
        correct: 0,
        incorrect: 0
    },
        currentQuestionIndex = 0,
        timeLimit =  120, //seconds
        timeRemaining, timer;
    
    var q = document.querySelector("main h1"),
    	img = document.querySelector("main img"),
        a = document.querySelector("main a:nth-of-type(1) span"),
        b = document.querySelector("main a:nth-of-type(2) span"),
        c = document.querySelector("main a:nth-of-type(3) span"),
        time = document.querySelector("footer span");

});
