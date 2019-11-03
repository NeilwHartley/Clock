function test () {

console.log("test");

var clockTest = new Clock;

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
