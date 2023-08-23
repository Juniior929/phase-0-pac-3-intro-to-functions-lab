const { isEqual } = require("expect/lib/TestUtils");

function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}

function logShout() {
  console.log('HELLO');
}
function logWhisper() {
  console.log('hello');
}
function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) {
  return "I can\'t hear you!"; }
}
function sayHiToHeadphonedRoommate(string) {
  if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else {
    return "I can\'t hear you!";
  } 
  }
  