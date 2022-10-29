var numberOfButtons = document.querySelectorAll("button").length;
var onDeck = "none";
var currentlyPlaying = "none";
var miliSeconds = 0;
var eventCounter = 0;

for (var i = 0; i < numberOfButtons; i++)
{
  document.querySelectorAll("button")[i].addEventListener("click", function()
  {
    var buttonInnerHTML = this.innerHTML;

    checkKeys(buttonInnerHTML);
  });
}

function checkKeys(key)
{
  var buttonInnerHTML = this.innerHTML;
  switch (key)
  {
    case "Intro":
      Stop();
      PlayIntro();
    break;
    case "Aidie-Daidie":
      Stop();
      PlayAidieDaidie();
    break;
    case "Verse":
      Stop();
      PlayVerse();
    break;
    case "Outro":
      Stop();
      PlayOutro();
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
  eventCounter +=1;
  var activeButton = document.querySelector("." + currentKey);
  var currentEventCounter = eventCounter;
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
  setTimeout(function(){
    if(eventCounter == currentEventCounter)
    {
      activeButton.classList.remove("play-green");
      if(currentKey == "Aidie-Daidie")
      {
        Stop();
        PlayVerse();
      }
      else if(currentKey == "Verse")
      {
        Stop();
        PlayAidieDaidie();
      }
    }
  }, miliSeconds);
}

// -------------------------------------- STOP PLAYBACK ------------------------------------------------
function Stop()
{
  onDeck = "none";
  currentlyPlaying = "none"
  var numberOfAudio = document.querySelectorAll('audio').length;
  for (var i = 0; i < numberOfAudio; i++)
  {
    document.querySelectorAll('audio')[i].pause();
  }
  WhiteButtons();
  //currentAudiodocument.querySelectorAll('audio').forEach(el => el.pause());
}
// -------------------------------------- STOP PLAYBACK END ------------------------------------------------


// -------------------------------------- TURN BUTTONS WHITE ------------------------------------------------
function WhiteButtons()
{
  for (var i = 0; i < numberOfButtons; i++)
  {
    document.querySelectorAll("button")[i].classList.remove("play-green");
    document.querySelectorAll("button")[i].classList.remove("play-purple");
    document.querySelectorAll("button")[i].classList.remove("play-blue");
  }
}
// -------------------------------------- TURN BUTTONS WHITE END ------------------------------------------------


//----------------------------------------- PLAY SONG SEGMENT FUNCTIONS --------------------------------------------
function PlayIntro()
{
  document.getElementById('Intro').currentTime = 0;
  document.getElementById('Intro').play();
  currentlyPlaying = "Intro";
  onDeck = "none";
  buttonPlay("Intro");
}
function PlayAidieDaidie()
{
  document.getElementById('Aidie-Daidie').currentTime = 0;
  document.getElementById('Aidie-Daidie').play();
  buttonPlay("Aidie-Daidie");
  currentlyPlaying = "Aidie-Daidie";
  onDeck = "Verse";
}
function PlayVerse()
{
  document.getElementById('Verse').currentTime = 0;
  document.getElementById('Verse').play();
  buttonPlay("Verse");
  currentlyPlaying = "Verse";
  onDeck = "Aidie-Daidie";
}
function PlayOutro()
{
  document.getElementById('Outro').currentTime = 0;
  document.getElementById('Outro').play();
  currentlyPlaying = "Outro";
  onDeck = "none";
  buttonPlay("Outro");
}
// ----------------------------------------- PLAY SONG SEGMENT FUNCTIONS END--------------------------------------------













//space
