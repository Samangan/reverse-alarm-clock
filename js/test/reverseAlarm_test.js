var assert = buster.assert;

buster.testCase("testcase", {
	setUp: function () {
		var reverseAlarm = window.reverseAlarm;
	},
	"test": function () {		
		assert.match(1, 1);
	}
});