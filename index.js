var numberOfButtons = document.querySelectorAll("button").length;
var onDeck = "none";
var currentlyPlaying = "none";
var miliSeconds = 0;

for (var i = 0; i < numberOfButtons; i++)
{
  document.querySelectorAll("button")[i].addEventListener("click", function()
  {
    var buttonInnerHTML = this.innerHTML;

    checkKeys(buttonInnerHTML);
    //buttonAnimation(buttonInnerHTML);
  });
}

function checkKeys(key)
{
  var buttonInnerHTML = this.innerHTML;
  //var audioElement = document.getElementById(buttonInnerHTML);
  //console.log(key);
  switch (key) {
    case "Intro":
      /*var intro = new Audio('clips/irish clips/1 Irish Intro.mp3');
      intro.play();*/
      Stop();
      //audioElement.currentTime = 0;
      //audioElement.play();
      document.getElementById('Intro').currentTime = 0;
      document.getElementById('Intro').play();
      buttonPlay("Intro");
    break;
    case "Aidie-Daidie":
      /*var aidie = new Audio('clips/irish clips/2 Irish Aidie Daidie Longer.mp3');
      aidie.play();*/
      Stop();
      document.getElementById('Aidie-Daidie').currentTime = 0;
      document.getElementById('Aidie-Daidie').play();
      buttonPlay("Aidie-Daidie");
    break;
    case "Verse":
      /*var verse = new Audio('clips/irish clips/3 Irish Verse Longer.mp3');
      verse.play();*/
      Stop();
      document.getElementById('Verse').currentTime = 0;
      document.getElementById('Verse').play();
      buttonPlay("Verse");
    break;
    case "Outro":
      /*var outro = new Audio('clips/irish clips/4 Irish Outro.mp3');
      outro.play();*/
      Stop();
      document.getElementById('Outro').currentTime = 0;
      document.getElementById('Outro').play();
      buttonPlay("Outro");
    break;
    case "Stop":
    console.log("clicked stop");
      Stop();
    break;

    default:console.log(buttonInnerHTML);
  }
}
/*
function buttonAnimation(currentKey)
{
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 125);
}*/

function buttonPlay(currentKey)
{
  var activeButton = document.querySelector("." + currentKey);
  miliSeconds = 0;
  if(currentKey == "Intro")
  {
    miliSeconds = 2284.250;
  }
  else if(currentKey == "Aidie-Daidie")
  {
    miliSeconds = 3696.292;
  }
  else if(currentKey == "Verse")
  {
    miliSeconds = 14756.021;
  }
  else
  {
    miliSeconds = 14969.646;
  }
  activeButton.classList.add("play-green");
  setTimeout(function()
  {
    if(currentlyPlaying == )
    {
      activeButton.classList.remove("play-green");
    }
  }, miliSeconds);
}

function Stop()
{
  onDeck = "none";
  currentlyPlaying = "none"
  var numberOfAudio = document.querySelectorAll('audio').length;
  for (var i = 0; i < numberOfAudio; i++)
  {
    document.querySelectorAll('audio')[i].pause();
  }

  for (var i = 0; i < numberOfButtons; i++)
  {
    document.querySelectorAll("button")[i].classList.remove("play-green");
    document.querySelectorAll("button")[i].classList.remove("play-purple");
    document.querySelectorAll("button")[i].classList.remove("play-blue");
  }
  //currentAudiodocument.querySelectorAll('audio').forEach(el => el.pause());
}










//space
