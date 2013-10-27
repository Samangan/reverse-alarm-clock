#Reverse Alarm Clock Bookmarklet#

This bookmarklet and JS library allows the user to input how much time they want that tab to remain open (in the format of 'X hours Y minutes Z seconds'. With the default being minutes if not specified.) After the time limit has expired the tab the bookmarklet was used on will close.

![UI of previous version](http://i.imgur.com/feNZg.png)

I made this tool, because I really needed it and it didn't exist. I use it when I want to listen to music or watch something while falling asleep. I find that backgroud noise helps me go to sleep, but I hate being woken up hours later when a movie, or music, etc suddenly gets very loud. This tool allows me to fall asleep to the content in my tab but have it close some time later once I am already asleep. 

###Buidling###

`$ git clone https://github.com/Samangan/reverse-alarm-clock.git`

`$ npm install`

`$ npm install -g grunt-cli`

`$ npm install -g buster`

Now lint, build, and create the minified file for the bookmarklet with:

`grunt`

###Testing###

To test setup the buster server by using 

`buster-server`

and then navigate to [http://localhost:1111](http://localhost:1111) and capture as many browsers as you want to test. Then call `buster-test` to run the tests (or use . See [here](http://docs.busterjs.org/en/latest/browser-testing/) for more information on buster browser testing.

####Building note for Windows Users####

Use [git bash](http://git-scm.com/downloads) to emulate a unix terminal. Buster does not work in Windows at the moment, but I have tested that everything works in windows using the git for windows terminal.


###Usage###

####As a JS library####


Call `reverseAlarm.promptUserForTime( )` to open the dialog window to allow the user to select the time until the tab closes. 

Call `reverseAlarm.startCountDown( )` to start counting down until the tab closes.

An example of how to use all of the functions is in the bookmarklet code.

TODO: Document the rest of the functions here (this is meant to be modularized).

####As a bookmarklet####

Add the minified version of the bookmarklet in [found here](update with real address) to your bookmarks. Then just press it on the page you wish. 


###TODO###
 - Reimplement with TDD
 * Once the JS library is working --> setup the bookmarklet code (this will have a UI and be an example of how to use the library)
 * Improve UI (Should I have a better interface for inputting time? Should I allow for more types of time inputs? --> Yes)
 * Update UI image in this readme + update the link to the minified bookmarklet in this readme
 * Put a full guide on using git bash + node in windows environment with this project as an example (put on blog)
