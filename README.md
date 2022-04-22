# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Malcolm Griffin

Time spent: 2  hours spent in total

Link to project: https://glitch.com/~long-glass-zircon

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![x]] <img src="http://g.recordit.co/j9HVUjUYfB.gif" width=500><br>


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
i used w3 school to look up how to implement a random javascript array with values inbetween two integers. I then used the monzilla developer website to look up how to implement an array that can be populated with the randomly generated integer values. I also used rapidtables.com for css color values. 
https://www.w3schools.com/js/js_random.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
https://www.rapidtables.com/web/css/css-color.html

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
The most challenging aspect for me would be implementing the random array, I am not familiar with javascript so i had to spend extra time looking up the proper syntax, as I have used python for the majority of my development classes. Another interesting challenge involving my implementation of the random pattern was getting the pattern array to change after every game. When i first implemented the feature i noticed that the array values did not change even when i started a new game, at first i thought the random function was broken, but i figured out i had to clear all the values from the pattern array when the stopGame() function was called, and then recreate the array again with new random values when the startGame() function was called. Another challenge for me was figuring out how to keep the clueHoldTime variable from dropping below 0 which would result in the sound being inaudible, and the color no longer displaying. I implemented a boolean check that would check if the value of the clueHoldTime is above a certain threshold before reducing the time the sound is played, and if the value is below the threshold it would increase the clueHoldTime before the next clue sound is played. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
I have so many questions! specifically concerning data vizualization, for example what if i implemented a vizual leaderboard that showed the highest scores from specific regions in the country or even across the globe. what would be one of the best libraries used to implement a feature such as that, and how would I go about setting up a database to manage and store users score so that the information can be tracked and displayed for other future users, or even creating user accounts so people can save their own scores. Finally i would be interested in learning how Python is used for web development as well. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
First, i would refactor the loseGame() and winGame() functions as I believe that is redundant code and can be simplified, the same for the lightButton and clearButton functions. Next I would implement different difficulty buttons next to the start button, an option for an easy mode where the clueHoldTime does not decrease after every guess, a medimum mode where the clueHoldTime does decrease, and a hard mode that would reduce the amount of possible mistakes to 0, which would end the game after 1 mistake, and last I  would implement an endless game mode that would take all of the features of the hard and medium mode, and the amount of guesses would continually increase until the person loses and then saves their score as their new high score. I would also implement a fun feature that would change the sound frequencies to match that of common nursey rhymes such as twinkle twinkle little star, or London Bridge is falling down, or the itsy bitsy spider. 


## Interview Recording URL Link

[My 5-minute Interview Recording] https://www.loom.com/share/b506250210944647b3899031a776177d


## License

    Copyright Malcolm Griffin

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.