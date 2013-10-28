var assert = buster.assert;

buster.testCase("can parse input string into hours mins and seconds", {
	setUp: function () {
		var reverseAlarm = window.reverseAlarm;
	},
	"test can parse hours": function () {
		var input_verbose = "4 hours";
		
		var arrOutput = reverseAlarm._parseStringToHoursMinsSecs(input_verbose);
		assert.match(arrOutput[0], 4);

		input_verbose = " 40000 hours ";
		
		arrOutput = reverseAlarm._parseStringToHoursMinsSecs(input_verbose);
		assert.match(arrOutput[0], 40000);

		input_verbose = " 4 hour ";
		
		arrOutput = reverseAlarm._parseStringToHoursMinsSecs(input_verbose);
		assert.match(arrOutput[0], 4);

		input_verbose = " 400hour ";
		
		arrOutput = reverseAlarm._parseStringToHoursMinsSecs(input_verbose);
		assert.match(arrOutput[0], 400);


		input_verbose = " 1337 hrs";
		
		arrOutput = reverseAlarm._parseStringToHoursMinsSecs(input_verbose);
		assert.match(arrOutput[0], 1337);

		input_verbose = "~ 1337 h!";
		
		arrOutput = reverseAlarm._parseStringToHoursMinsSecs(input_verbose);
		assert.match(arrOutput[0], 1337);

		input_verbose = "1337 h  1990 minutes 120 seconds";
		
		arrOutput = reverseAlarm._parseStringToHoursMinsSecs(input_verbose);
		assert.match(arrOutput[0], 1337);

		input_verbose = "1337 h:1990 minutes:120 seconds";
		
		arrOutput = reverseAlarm._parseStringToHoursMinsSecs(input_verbose);
		assert.match(arrOutput[0], 1337);


		input_verbose = "1337h:1990minutes:120seconds";
		
		arrOutput = reverseAlarm._parseStringToHoursMinsSecs(input_verbose);
		assert.match(arrOutput[0], 1337);
	},

	"test can parse minutes": function () {
		var input_verbose = "4 minutes";
		
		var arrOutput = reverseAlarm._parseStringToHoursMinsSecs(input_verbose);
		assert.match(arrOutput[1], 4);

		input_verbose = " 40000 minutes ";
		
		arrOutput = reverseAlarm._parseStringToHoursMinsSecs(input_verbose);
		assert.match(arrOutput[1], 40000);

		input_verbose = " 4 minute ";
		
		arrOutput = reverseAlarm._parseStringToHoursMinsSecs(input_verbose);
		assert.match(arrOutput[1], 4);

		input_verbose = " 400mins ";
		
		arrOutput = reverseAlarm._parseStringToHoursMinsSecs(input_verbose);
		assert.match(arrOutput[1], 400);


		input_verbose = " 1337 min";
		
		arrOutput = reverseAlarm._parseStringToHoursMinsSecs(input_verbose);
		assert.match(arrOutput[1], 1337);

		input_verbose = "~ 1337 m!";
		
		arrOutput = reverseAlarm._parseStringToHoursMinsSecs(input_verbose);
		assert.match(arrOutput[1], 1337);

		input_verbose = "1337 h  1990 minutes 120 seconds";
		
		arrOutput = reverseAlarm._parseStringToHoursMinsSecs(input_verbose);
		assert.match(arrOutput[1], 1990);

		input_verbose = "1337 h:199000009 minutes:120 seconds";
		
		arrOutput = reverseAlarm._parseStringToHoursMinsSecs(input_verbose);
		assert.match(arrOutput[1], 199000009);


		input_verbose = "1337h:1minutes:120seconds";
		
		arrOutput = reverseAlarm._parseStringToHoursMinsSecs(input_verbose);
		assert.match(arrOutput[1], 1);
	},

	"test can parse seconds": function () {
		var input_verbose = "4 seconds";
		
		var arrOutput = reverseAlarm._parseStringToHoursMinsSecs(input_verbose);
		assert.match(arrOutput[2], 4);

		input_verbose = " 40000 seconds ";
		
		arrOutput = reverseAlarm._parseStringToHoursMinsSecs(input_verbose);
		assert.match(arrOutput[2], 40000);

		input_verbose = " 4 second ";
		
		arrOutput = reverseAlarm._parseStringToHoursMinsSecs(input_verbose);
		assert.match(arrOutput[2], 4);

		input_verbose = " 400secs ";
		
		arrOutput = reverseAlarm._parseStringToHoursMinsSecs(input_verbose);
		assert.match(arrOutput[2], 400);


		input_verbose = " 1337 sec";
		
		arrOutput = reverseAlarm._parseStringToHoursMinsSecs(input_verbose);
		assert.match(arrOutput[2], 1337);

		input_verbose = "~ 1337 s!";
		
		arrOutput = reverseAlarm._parseStringToHoursMinsSecs(input_verbose);
		assert.match(arrOutput[2], 1337);

		input_verbose = "1337 h  1990 minutes 120 seconds";
		
		arrOutput = reverseAlarm._parseStringToHoursMinsSecs(input_verbose);
		assert.match(arrOutput[2], 120);

		input_verbose = "1337 h:199000009 minutes:119281920 seconds";
		
		arrOutput = reverseAlarm._parseStringToHoursMinsSecs(input_verbose);
		assert.match(arrOutput[2], 119281920);


		input_verbose = "1337h:1minutes:119281920seconds";
		
		arrOutput = reverseAlarm._parseStringToHoursMinsSecs(input_verbose);
		assert.match(arrOutput[2], 119281920);
	},
	"test can parse hours, minutes, and seconds": function() {
		var input_verbose = "4 hours 2 minutes 100 seconds";
		
		var arrOutput = reverseAlarm._parseStringToHoursMinsSecs(input_verbose);
		//hours
		assert.match(arrOutput[0], 4);

		//minutes
		assert.match(arrOutput[1], 2);

		//seconds
		assert.match(arrOutput[2], 100);


		//out of order test
		input_verbose = "2 minutes 20002hours 100 seconds";
		
		arrOutput = reverseAlarm._parseStringToHoursMinsSecs(input_verbose);
		//hours
		assert.match(arrOutput[0], 20002);

		//minutes
		assert.match(arrOutput[1], 2);

		//seconds
		assert.match(arrOutput[2], 100);

		//different formatting + no whitespace
		input_verbose = "200m:20002h;100s";
		
		arrOutput = reverseAlarm._parseStringToHoursMinsSecs(input_verbose);
		//hours
		assert.match(arrOutput[0], 20002);

		//minutes
		assert.match(arrOutput[1], 200);

		//seconds
		assert.match(arrOutput[2], 100);
	},
	"test can handle null input": function() {

		input_verbose = "200m";
		
		arrOutput = reverseAlarm._parseStringToHoursMinsSecs(input_verbose);
		//hours
		assert.match(arrOutput[0], 0);

		//minutes
		assert.match(arrOutput[1], 200);

		//seconds
		assert.match(arrOutput[2], 0);


		//all nulls
		input_verbose = "";
		
		arrOutput = reverseAlarm._parseStringToHoursMinsSecs(input_verbose);
		//hours
		assert.match(arrOutput[0], 0);

		//minutes
		assert.match(arrOutput[1], 0);

		//seconds
		assert.match(arrOutput[2], 0);

		//junk data
		input_verbose = "1999";
		
		arrOutput = reverseAlarm._parseStringToHoursMinsSecs(input_verbose);
		//hours
		assert.match(arrOutput[0], 0);

		//minutes
		assert.match(arrOutput[1], 0);

		//seconds
		assert.match(arrOutput[2], 0);
	}
});

buster.testCase("test can convert hours, minutes, and seconds into milliseconds", {
	setUp: function () {
		var reverseAlarm = window.reverseAlarm;
	},
	"test can convert seconds to milliseconds": function () {
		var inputArr = [0, 0, 100];
		var milliseconds = reverseAlarm._convertToMilliseconds(inputArr);
		assert.match(milliseconds, 100000);
	},
	"test can convert minutes to milliseconds": function () {
		var inputArr = [0, 1000, 0];
		var milliseconds = reverseAlarm._convertToMilliseconds(inputArr);
		assert.match(milliseconds, 60000000);
	},
	"test can convert hours to milliseconds": function () {
		var inputArr = [1000, 0, 0];
		var milliseconds = reverseAlarm._convertToMilliseconds(inputArr);
		assert.match(milliseconds, 3600000000);
	},
	"test can convert hours, seconds, and minutes to milliseconds": function () {
		var inputArr = [1000, 50, 10001];
		var milliseconds = reverseAlarm._convertToMilliseconds(inputArr);
		assert.match(milliseconds,3613001000);
	}
});

//TODO: is this test needed?
// All the inernals were already tested.
buster.testCase("test can prompt user to insert time", {
	setUp: function () {
		var reverseAlarm = window.reverseAlarm;
	},
	"test can prompt user default value and returns proper value": function () {
		//testing for default value: 1 hour 20 minutes 10 seconds
		var millisToStayOpen = reverseAlarm.promptUserForTime();
		assert.match(millisToStayOpen, 4810000);
	}
});


buster.testCase("test can update time", {
	setUp: function () {
		var reverseAlarm = window.reverseAlarm;
	},
	"test can update time": function () {
		var timeLeft = 2000;
		var testDiv = document.createElement("div");
		timeLeft = reverseAlarm._updateTime(testDiv, timeLeft);
		assert.match(timeLeft, 1000);
	},
	"test can update very large number":function () {
		var timeLeft = 3670463000;
		var testDiv = document.createElement("div");
		timeLeft = reverseAlarm._updateTime(testDiv, timeLeft);
		assert.match(timeLeft, 3670462000);
	}
});

buster.testCase("test can start countdown", {
	setUp: function () {
		var reverseAlarm = window.reverseAlarm;
	},
	"test can update time": function () {
		var millisLeft = reverseAlarm.promptUserForTime();
		reverseAlarm.startCountDown(millisLeft);
		assert(1, 1);
	}
});
