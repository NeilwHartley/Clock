class Clock {

	static totalDegrees = 360;
	static hoursOnClock = 12; //12hr clock
	static minutesInHour = 60;
	static morning = 8;
	static evening = 16;
	static midday = 12;
	time = null;
	whenClockStateUpdates = null;
	nighttime = null;
	daytime = null;

	constructor () {
		
		this.setTime(new Date());
	}

	setTime (time) {

		this.time = time;
	}

	setUpdateCallback (callback) {

		this.whenClockStateUpdates = callback;
	}


	setNighttimeCallback (callback2) {

		this.nighttime = callback2;
	}

	setDaytimeCallback (callback3BecauseJoeWillLoveThisName) {

		this.daytime = callback3BecauseJoeWillLoveThisName;
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

	updateTime () {

		this.setTime(new Date());
		this.whenClockStateUpdates(this);
		if (this.getHour() < Clock.morning || this.getHour() > Clock.evening) {
			this.nighttime(this);

		} else {

			this.daytime(this);
		}
	}

	/*
	changeColourAtNighttime () {

		if (this.getHour() < Clock.morning || this.getHour() > Clock.evening) {
			document.body.style.backgroundColor = "teal";
		}
	}
*/

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

	getClockHTML () {

		return `
		<div id="display-time">
		<p id="clockBox"></p>
		</div>
		<div id="clockFace">
		<div id="hourHand" class="hand"></div>
		<div id="minuteHand" class="hand"></div>
		<div id="secondHand" class="hand"></div>
		</div>
		`
	}
}
