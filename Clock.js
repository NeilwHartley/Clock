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

		console.log("updateTime");
		this.setTime(new Date());
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
