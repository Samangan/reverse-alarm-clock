

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
		var parsedTime = new Array(3);

		//TODO: implement


		return parsedTime;
	};

	reverseAlarm._convertToMilliseconds = function(parsedTimeArr) {
		//input: Array[hours, mins, seconds]
		//output: number of milliseconds from the accumulative time inputted
		
	};


})();