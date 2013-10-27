
buster.testCase("A module", {
    "states the obvious": function () {
        buster.assert(true);
    }
});


buster.testCase("testcase", {
	setUp: function () {
		var reverseAlarm = window.reverseAlarm;
	},
	"test": function () {		
		buster.assert.match(1, 1);
	}
});