

(function () {

	var reverseAlarm = window.reverseAlarm = function reverseAlarm() {
		//does anything need to be done here?

	};

	reverseAlarm.promptUserForTime = function() {
		//send simple prompt with textbox

		//parse the prompt into hours, minutes, seconds (test this thoroughly)

		//return milliseconds (test this thoroughly)
	};

	reverseAlarm.startCountDown = function(milliseconds) {
		//start the countdown to close the tab in minutes

		//update the countdown (How can I test this)
	};



	reverseAlarm._parseStringToHoursMinsSecs = function(userInputtedString) {
		//input: string
		//output: Array[hours, mins, seconds]
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

	reverseAlarm._convertToMilliseconds = function(parsedTimeArr) {
		//input: Array[hours, mins, seconds]
		//output: number of milliseconds from the accumulative time inputted

	};


})();