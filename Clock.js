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
		document.body.innerHTML = this.getTimeStringHTML()
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

		<div>
		<p>Time: ${this.getHour()}:${this.getMinute()}:${this.getSecond()}</p>
		</div>
		`
	}
}
