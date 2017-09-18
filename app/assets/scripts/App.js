/* Testing webpack - gulp integration */

var $ = require('jquery');
var Person = require('./modules/Person')

alert("ABC 321");

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();

$("h1").remove();
