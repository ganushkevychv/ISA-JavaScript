var myArray = new Array();
myArray[0] = 8;
myArray[1] = "hello";

var myCar = new Object();
maCar.maxSpeed = 50;
myCar.driver = "Vlad";
myCar.drive = function() { console.log("now drivng"); };

myCar.drive();

var myCar2 = {
    maxSpeed: 70,
    driver: "Vladyslav",
    drive: function(speed, time) {
        console.log(speed * time);
    }

};
console.log(myCar2.maxSpeed);
myCar2.drive();