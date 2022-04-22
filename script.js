//Global Constants

const cluePauseTime = 500; //how long to pause in between clues
const nextClueWaitTime = 500; //how long to wait before starting playback of the clue sequence
//Global Variables

var pattern = Array.from({length: 8}, () => Math.floor(Math.random() *(6-1)) +1);
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; // must be between 0.0 and 1.0
var guessCounter = 0;
var strikes = 0;
var clueHoldTime = 1000; //How long to hold each clues light/sound in milliseconds

function playClueSequence() {
  console.log(pattern)
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  console.log("cluetime: "+clueHoldTime)
  if (clueHoldTime <= 150){
    clueHoldTime = 150
  }
  
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
   }  
    if (clueHoldTime > 150){
    clueHoldTime -=100
  }
}
function startGame() {
  //initialize game variables
  strikes = 0;
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 1000
  pattern = Array.from({length: 8}, () => Math.floor(Math.random() *(6-1)) +1); //changes the pattern after each new game
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  pattern = [] // clears the old pattern values
  
  // swap the Start and Stop buttons again back to their initial values
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}
// Sound Synthesis Functions
const freqMap = {
  1: 222.6,
  2: 319.6,
  3: 372,
  4: 446.2,
  5: 539.5
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

function guess(btn) {
  console.log("user guessed: " + btn);

  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    //Guess correct
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        //GAME OVER 
        winGame();
      } else {
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    } else {
      //so far so good... check the next guess
      guessCounter++;
    }
  } else {
    strikes += 1;
    console.log("Current mistake count: "+strikes)
    if (strikes == 3) {
      loseGame();
    }
    //Guess was incorrect
    //GAME OVER: LOSE!
    
  }
}
function loseGame() {
  stopGame();
  alert("Game over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game over. You won!!");
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
