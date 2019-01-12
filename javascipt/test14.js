var myPastDate = new Date(1545, 11, 2, 10, 30, 15);
var myFutureDate = new Date(2515, 0, 31, 10, 30, 15);
console.log(myPastDate);
console.log(myFutureDate);

var birhtday = new Date(1985, 0, 15, 11, 15, 25);
var birhtday2 = new Date(1985, 0, 15, 11, 15, 25);

//get the full year (YYYY)
console.log(birhtday.getFullYear());



//get the mounth of the date (0 - 11)
console.log(birhtday.getMonth());




//get the day of the week
console.log(birhtday.getDay());


//get the number of milliseconds since 1st Jan 1970
console.log(birhtday.getTime());

if (birhtday == birhtday2) {
    console.log("birhtdays are equal");

} else {
    console.log("birhtday are not equal");
}