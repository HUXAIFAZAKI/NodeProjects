function startCountdown(targetDate: string) {
    console.log('Starting Timer for 60 seconds!');
    
    let target = new Date(targetDate).getTime();

    let intervalId = setInterval(() => {
        let currentTime = new Date().getTime();
        let timeDifference = target - currentTime;

        if (timeDifference <= 0)
        {
            clearInterval(intervalId);
            console.log("Timer ended.");
        }
        else {
            
            let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            if(seconds == 30)
                {
                    console.log("only 30 seconnds left!");
                }
            else if(seconds == 10)
                {
                    console.log("only 10 seconnds left!");
                }
                
            console.log(`Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`);
        }
    }, 1000);
}

let currentDate = new Date();
currentDate.setSeconds(currentDate.getSeconds() + 60);
startCountdown(currentDate.toString());
