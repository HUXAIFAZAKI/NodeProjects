function startCountdown(targetDate) {
    console.log('Starting Timer for 60 seconds!');
    var target = new Date(targetDate).getTime();
    var intervalId = setInterval(function () {
        var currentTime = new Date().getTime();
        var timeDifference = target - currentTime;
        if (timeDifference <= 0) {
            clearInterval(intervalId);
            console.log("Timer ended.");
        }
        else {
            var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            if (seconds == 30) {
                console.log("only 30 seconnds left!");
            }
            else if (seconds == 10) {
                console.log("only 10 seconnds left!");
            }
            console.log("Countdown: ".concat(days, "d ").concat(hours, "h ").concat(minutes, "m ").concat(seconds, "s"));
        }
    }, 1000);
}
var currentDate = new Date();
currentDate.setSeconds(currentDate.getSeconds() + 60);
startCountdown(currentDate.toString());
