var score = 0;

//2

document
	.getElementById("increase-5")
	.addEventListener("click", function() {
		score += 5;
		changeScore();
	});

document
	.getElementById("decrease-5")
	.addEventListener("click", function() {
		score -= 5;
		changeScore();
	});

//3

document
	.getElementById("submit-custom-score")
	.addEventListener("click", function() {
		var newScore = document.getElementById("custom-score").value;
		score = parseInt(newScore);

		//Clear existing value
		document.getElementById("custom-score").value = "";

		changeScore();
	});

//Bonus + Super bonus

function changeScore() {
	if (score < 0) {
		return false;
	} else {
		document.getElementById("score").innerHTML = score + " Points";
	}
}