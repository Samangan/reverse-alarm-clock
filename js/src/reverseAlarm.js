

(function () {
	var countdownDiv = {};

	var reverseAlarm = window.reverseAlarm = function reverseAlarm() {};

	reverseAlarm.promptUserForTime = function() {
		//send simple prompt with textbox
		var timeBeforeClosingTab = prompt("How long do you want this tab to stay open?","1 hour 20 minutes 10 seconds");

		//parse the prompt into hours, minutes, seconds
		var parsedTime = reverseAlarm._parseStringToHoursMinsSecs(timeBeforeClosingTab);

		//return milliseconds
		return reverseAlarm._convertToMilliseconds(parsedTime);
	};

	reverseAlarm.startCountDown = function(milliseconds) {
		//start the countdown to close the tab in minutes
		var timeUntilClose = milliseconds;

		//initialize the countdown div
		reverseAlarm._initializeCountdownDiv();

		//every second update the time left
		setInterval(function() {
			//TODO: pass in the div to the constructor
			// or make it a configurable variable
			// or should I just keep it all internal???
			// For now keep it all internal.
			timeUntilClose = reverseAlarm._updateTime(countdownDiv, timeUntilClose);
		}, 1000);

		setTimeout(function() {
			//close tab even if there are popups confirming closing the tab
			//example: grooveshark, teevox, etc.
			//TODO: is this the best place to put this?
			window.onbeforeunload = function () {};		
			window.open(location.href, "_self").close();
		}, milliseconds);
	};

	//input: string
	//output: Array[hours, mins, seconds]
	reverseAlarm._parseStringToHoursMinsSecs = function(userInputtedString) {
		//TODO: make the default minutes if only a number is given and no valid unit
		var hours =  userInputtedString.match(/\d+(?=\s*(hours|hour|hrs|hr|h))/gi);
		var minutes =  userInputtedString.match(/\d+(?=\s*(minutes|minute|mins|min|m))/gi);
		var seconds =  userInputtedString.match(/\d+(?=\s*(seconds|second|secs|sec|s))/gi);

		if(hours){
			hours = hours[0];
		} else {
			hours = 0;
		}

		if(minutes){
			minutes = minutes[0];
		} else {
			minutes = 0;
		}

		if(seconds){
			seconds = seconds[0];
		} else {
			seconds = 0;
		}		

		return [parseInt(hours), parseInt(minutes), parseInt(seconds)];
	};

	//input: Array[hours, mins, seconds]
	//output: number of milliseconds from the accumulative time inputted
	reverseAlarm._convertToMilliseconds = function(parsedTimeArr) {
		var hours = parsedTimeArr[0];
		var minutes = parsedTimeArr[1] + hours * 60;
		var seconds = parsedTimeArr[2] + minutes * 60;
		return seconds * 1000;
	};


	reverseAlarm._updateTime = function(element, timeLeft) {
		var newTime = timeLeft - 1000;

		var hours = parseInt((newTime / 1000) / 3600, 10);
		var minutes = parseInt((newTime - hours * 1000 * 3600) / 1000 / 60, 10);
		var seconds = parseInt((newTime - (minutes * 1000 * 60 + hours * 1000 * 3600)) / 1000, 10);
		//TODO: Should I externalize this somehow?
		// or make it better in some other way?
		element.innerHTML = "Time Left until tab closes. <br/>Hours: " + hours + " Minutes: " + minutes + " Seconds: " + seconds;
		return newTime;
	};


	//TODO: Make this cleaner
	//TODO: Make this look nicer
	reverseAlarm._initializeCountdownDiv = function() {
		//TODO: externalize this into a function
		// and make better and clean it up
		// also make it prettier
		// should I use a js library that is designed to countdown time?
		// example: http://flipclockjs.com/ 
		// code: https://github.com/objectivehtml/FlipClock
		countdownDiv = document.createElement("div");
		countdownDiv.id = "reverseAlarm_bookmarklet";
		//countdownDiv.style.display = "block";
		countdownDiv.style.position = "absolute";
		countdownDiv.style.top = "120px";
		countdownDiv.style.left = "400px";
		countdownDiv.style.backgroundColor = "rgba(0, 255, 245, 0.46)";
		countdownDiv.style.zIndex = "10";
		countdownDiv.style.borderRadius = "55px";
		countdownDiv.style.textAlign = "center";
		document.body.insertBefore(countdownDiv, document.body.firstChild);
	};

})();