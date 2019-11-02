class Clock {

	//statics
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

	updateTime() {

		this.setTime(new Date());
		document.body.innerHTML = this.getTimeStringHTML();
		document.body.innerHTML = this.displayClock();
		this.nightTime();
	}

	nightTime () {

		if (17 < this.getHour() < 8) {
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

	getTimeStringHTML () {

		return `
		<div id="display-time">
		<p>Time: ${this.getHour()}:${this.getMinute()}:${this.getSecond()}</p>
		</div>
		`
	}

	displayClock () {

		return `
		<div id="display-time">
		<p>Time: ${this.getHour()}:${this.getMinute()}:${this.getSecond()}</p>
		</div>
		<div id="clock-face">
		<div id="hour-hand" class="hand"></div>
		<div id="minute-hand" class="hand"></div>
		<div id="second-hand" class="hand"></div>
		</div>
		`
	}
}
