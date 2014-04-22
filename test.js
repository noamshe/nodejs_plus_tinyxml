
var addon = require('./build/Release/hello');
var xmlStr = "<ToDo><Item priority=\"1st priority\"> item 1</Item><Item priority=\"2nd priority\"> item 2</Item></ToDo>";

console.log(addon.hello(xmlStr)); // 'world'



