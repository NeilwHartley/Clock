function test () {

console.log("test");

var clockTest = new Clock;

console.log(clockTest.time);

clockTest.getTimeString();

console.log(clockTest.getTimeString());

clockTest.updateTime();

console.log(clockTest.getTimeString());
}