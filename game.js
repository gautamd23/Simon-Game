var gamePattern = [];

var userClickedPattern = [];

var level = 0;

var startedToToggle = false;

var btnColorsArray = ["red", "blue", "green", "yellow"];

// on key press

$(document).keypress(function () {
  if (!startedToToggle) {
    $("#level-title").text("Level " + level);

    newSequence();

    startedToToggle = true;
  }
});

function newSequence() {
  userClickedPattern = [];

  level++;

  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = btnColorsArray[randomNumber];

  console.log(randomChosenColour);

  gamePattern.push(randomChosenColour);

  console.log(gamePattern);

  playSound(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeOut(100)

    .fadeIn(100)

    .fadeOut(100)

    .fadeIn(100);

  console.log("press");
}

function makeSound() {
  switch (randomChosenColour) {
    case "blue":
      var blue = new Audio("./sounds/blue.mp3");

      blue.play();

      break;

    case "green":
      var green = new Audio("./sounds/green.mp3");

      green.play();

      break;

    case "red":
      var red = new Audio("./sounds/red.mp3");

      red.play();

      break;

    case "yellow":
      var yellow = new Audio("./sounds/yellow.mp3");

      yellow.play();

      break;
  }
}

// on button click

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  console.log(userClickedPattern);

  playSound(userChosenColour);

  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

function playSound(name) {
  switch (name) {
    case "blue":
      var blue = new Audio("./sounds/blue.mp3");

      blue.play();

      break;

    case "green":
      var green = new Audio("./sounds/green.mp3");

      green.play();

      break;

    case "red":
      var red = new Audio("./sounds/red.mp3");

      red.play();

      break;

    case "yellow":
      var yellow = new Audio("./sounds/yellow.mp3");

      yellow.play();

      break;
  }
}

// function animatePress(currentColour) {

//   $(".btn").click(function () {

//     if ($(this).attr("class") === currentColour) {

//       $(this).attr(".pressed");

//     }

//   });

// }

function animatePress(curColor) {
  //   $(".btn").click(function () {

  //     var currentColor = $(this).addClass("pressed");

  //   });

  var currentColor = $("." + curColor);

  currentColor.addClass("pressed");

  setTimeout(function () {
    $("." + curColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  console.log(currentLevel);

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("same");

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        newSequence();
      }, 1000);
    }
  } else {
    var wrongAnswer = new Audio("./sounds/wrong.mp3");

    wrongAnswer.play();

    $("body").addClass("game-over");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("h1").text("Game Over, Press Any Key to Restart");

    startOver();
  }

  var game = gamePattern[currentLevel];

  console.log(game);
}

function startOver() {
  level = 0;

  gamePattern = [];

  startedToToggle = false;
}
