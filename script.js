let clicks = 0;
const totalCandles = 21;

// Array of positions for each candle
const candlePositions = [
    { top: "154px", left: "182px" },
    { top: "126px", left: "216px" },
    { top: "186px", left: "203px" },
    { top: "108px", left: "244px" },
    { top: "166px", left: "230px" },    
    { top: "126px", left: "266px" },
    { top: "198px", left: "252px" }, 
    { top: "108px", left: "286px" },
    { top: "166px", left: "280px" },  
    { top: "198px", left: "301px" },   
    { top: "126px", left: "314px" },
    { top: "166px", left: "329px" },
    { top: "108px", left: "336px" },
    { top: "126px", left: "357px" },
    { top: "108px", left: "378px" },
    { top: "126px", left: "413px" },
    { top: "154px", left: "448px" },
    { top: "166px", left: "378px" },   
    { top: "186px", left: "420px" },
    { top: "198px", left: "392px" },
    { top: "198px", left: "351px" },
];

function handleClick() {
    if (clicks < totalCandles) {
        // Light up a new candle at the next position
        addCandle(clicks);
        clicks++;
        document.getElementById("click-counter").innerText = clicks;
    }

    if (clicks === totalCandles) {
        launchConfetti();
        setTimeout(showBirthdayText, 1000); // Delay to display the wish text after confetti
        setTimeout(blowOutCandles, 2000); // Delay to blow out candles after confetti
    }
}

function addCandle(index) {
    const candleOverlay = document.getElementById("candles-overlay");
    const candle = document.createElement("div");
    candle.classList.add("lit-candle");

    // Position the candle at the specific location
    candle.style.top = candlePositions[index].top;
    candle.style.left = candlePositions[index].left;

    // Add the candle to the overlay container
    candleOverlay.appendChild(candle);
}

function launchConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

function showBirthdayText() {
    document.getElementById("birthday-text").style.display = "block";
}

function blowOutCandles() {
    const candles = document.querySelectorAll(".lit-candle");
    candles.forEach(candle => candle.classList.add("blow-out"));
}
