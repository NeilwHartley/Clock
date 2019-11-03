class Clock {

	static totalDegrees = 360;
	static hoursOnClock = 12; //12hr clock
	static minutesInHour = 60;
	static morning = 8;
	static evening = 16;
	static midday = 12;
	time = null;

	constructor () {
		this.setTime(new Date());
	}

	setTime (time) {

		this.time = time;
	}

	getTime () {

		return this.time;
	}

	getHour () {

		return this.getTime().getHours();
	}

	getMinute () {

		return this.getTime().getMinutes();
	}

	getSecond () {

		return this.getTime().getSeconds();
	}

	getHourDegree () {

		if (this.getHour() > Clock.midday) {
			return (this.getHour() - Clock.midday) * (Clock.totalDegrees / Clock.hoursOnClock);
		} else {
			return this.getHour() * (Clock.totalDegrees / Clock.hoursOnClock);
		}
	}

	getMinuteDegree () {

		return (this.getMinute() * (Clock.totalDegrees / Clock.minutesInHour));
	}

	getSecondDegree () {

		return (this.getSecond() * (Clock.totalDegrees / Clock.minutesInHour));
	}

	moveHourHand () {

		document.getElementById("hourHand").style.transform = "rotate(" + this.getHourDegree() + "deg)";
	}

	moveMinuteHand () {

		document.getElementById("minuteHand").style.transform = "rotate(" + this.getMinuteDegree() + "deg)";
	}

	moveSecondHand () {

		document.getElementById("secondHand").style.transform = "rotate(" + this.getSecondDegree() + "deg)";
	}

	updateTime () {

		this.setTime(new Date());
		document.body.innerHTML = this.displayClock();
		this.nightTime();
		this.moveHourHand();
		this.moveMinuteHand();
		this.moveSecondHand();
	}

	nightTime () {

		if (this.getHour() < Clock.morning || this.getHour() > Clock.evening) {
			document.body.style.backgroundColor = "teal";
		}
	}

	getTimeString () {

		var timeString = 
		`
		Time: ${this.getTime()}
		Hour: ${this.getHour()}
		Minute: ${this.getMinute()}
		Second: ${this.getSecond()}
		`
		return timeString;
	}

	/* getTimeStringHTML () {

		return `
		<div id="display-time">
		<p>Time: ${this.getHour()}:${this.getMinute()}:${this.getSecond()}</p>
		</div>
		`
	}
	*/

	displayClock () {

		return `
		<div id="display-time">
		<p>Time: ${this.getHour()}:${this.getMinute()}:${this.getSecond()}</p>
		</div>
		<div id="clock-face">
		<div id="hourHand" class="hand"></div>
		<div id="minuteHand" class="hand"></div>
		<div id="secondHand" class="hand"></div>
		</div>
		`
	}
}
