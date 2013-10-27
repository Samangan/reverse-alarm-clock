var assert = buster.assert;

buster.testCase("testcase", {
	setUp: function () {
		var reverseAlarm = window.reverseAlarm;
	},
	"test": function () {
		assert.match(1, 1);
	}
});


buster.testCase("can parse input string into hours mins and seconds", {
	setUp: function () {
		var reverseAlarm = window.reverseAlarm;
	},
	"test can parse hours": function () {
		//verbose input
		var input_verbose = "4 hours";
		
		var arrOutput = reverseAlarm._parseStringToHoursMinsSecs(input_verbose);
		assert.match(arrOutput[0], 4);

		//minimal input ("4 h")

		//normal input ("4 hrs" / "4 hr")

	},

	"test can parse minutes": function () {
		assert.match(1, 1);
	},

	"test can parse seconds": function () {
		assert.match(1, 1);
	}
});