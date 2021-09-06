

// 3. Parse the following date, 11/3/2020, and convert it into the following format: Sunday, February 14th 2010, 3:25:50 pm.
// var reformatDate = moment(today).format("dddd, MMMM Do YYYY, h:mm:ss a");
// // $("#curDateTime").text(reformatDate);
// $("#curDateTime").text("haha");

// var reformatDate = moment("11/3/20", "MM-DD-YY").format("dddd, MMMM Do YYYY, h:mm:ss a");
// $("#curDateTime").text(reformatDate);

var today = moment();
var reformatDate = moment(today, "MM-DD-YY").format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#curDateTime").text(reformatDate);
