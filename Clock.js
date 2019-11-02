class Clock {

	//statics

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
		
		console.log("getHour");
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
		console.log("updateTime");
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
}

Clock.prototype.time = null;
Clock.prototype.hour = null;

