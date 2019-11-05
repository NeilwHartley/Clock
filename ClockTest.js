function test () {

	console.log("test");

	const whenClockStateChanges = function (clock) {

		console.log("clock updated");
		document.getElementById("hourHand").style.transform = "rotate(" + clock.getHourDegree() + "deg)";
		document.getElementById("minuteHand").style.transform = "rotate(" + clock.getMinuteDegree() + "deg)";
		document.getElementById("secondHand").style.transform = "rotate(" + clock.getSecondDegree() + "deg)";
		document.getElementById("clockBox").innerHTML = "Time: " + this.getHour() + ":" + this.getMinute() + ":" + this.getSecond();
	}

	const whenNighttimeIsTrue = function (clock) {

		document.body.style.backgroundColor = "teal";
	}

	whenNighttimeIsFalse = function (clock) {

		document.body.style.backgroundColor = "white";
	}

	var clockTest = new Clock();

	clockTest.setUpdateCallback(whenClockStateChanges);

	clockTest.setNighttimeCallback(whenNighttimeIsTrue);

	clockTest.setDaytimeCallback(whenNighttimeIsFalse);

	document.body.innerHTML = clockTest.getClockHTML();

	console.log(clockTest.time);

	clockTest.getTimeString();

	console.log(clockTest.getTimeString());


	console.log(clockTest.getTimeString());


	clockTest.updateTime();

	Clock.prototype.update = function () {
		setInterval(this.updateTime.bind(this), 1000);
	}

	clockTest.update();

}
