#Reverse Alarm Clock Bookmarklet#

This bookmarklet and JS library allows the user to input how much time they want that tab to remain open (in the format of 'X hours Y minutes Z seconds'. With the default being minutes if not specified.) After the time limit has expired the tab the bookmarklet was used on will close.

![UI of previous version](http://i.imgur.com/feNZg.png)

I made this tool, because I really needed it and it didn't exist. I use it when I want to listen to music or watch something while falling asleep. I find that backgroud noise helps me go to sleep, but I hate being woken up hours later when a movie, or music, etc suddenly gets very loud. This simple tool allows me to fall asleep to the content in my tab but have it close some time later once I am already asleep. 

It usually only takes me about 35 minutes to fall asleep so I set mine to 55 minutes. I am no longer waking up to people screaming about dying in a video game at 2 AM. :]



TODO:
 * Setup grunt build with minification [Done]
 * Setup Buster testing [Done]
 * Reimplement with TDD
 * Once the JS library is working --> setup the bookmarklet code (this will have a UI and be an example of how to use the library)
 * Improve UI (Should I have a better interface for inputting time? Should I allow for more types of time inputs? --> Yes)
 * Update UI image in this readme + update the link to the minified bookmarklet in this readme
 * Add automated browser testing to ensure that it works in multiple browsers


###Buidling###

`$ git clone https://github.com/Samangan/reverse-alarm-clock.git`

`$ npm install`

`$ npm install -g grunt-cli`

Now lint, build, and create the minified file for the bookmarklet with:

`grunt`


###Usage###

####As a JS library####


Call `reverseAlarm.promptUserForTime( )` to open the dialog window to allow the user to select the time until the tab closes. 

Call `reverseAlarm.startCountDown( )` to start counting down until the tab closes.

An example of how to use all of the functions is in the bookmarklet code.

TODO: Document the rest of the functions here (this is meant to be modularized).

####As a bookmarklet####

Add the minified version of the bookmarklet in [found here](update with real address) to your bookmarks. Then just press it on the page you wish. 
