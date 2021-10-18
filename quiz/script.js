const pump = new Audio('./audio/sfx/pump.mp3');
const pop = new Audio('./audio/sfx/pop.mp3');

function startButtonClick() {
    let startButton = document.getElementById("startButton");
    startButtonPop()
/*
    if (startButton.style.paddingLeft == "") {
        playSound(pump)
        startButton.style.paddingLeft = startButton.style.paddingRight = "19px";
    } else if (startButton.style.paddingLeft != "340px") {
        playSound(pump)
        let sidePadding = parseInt(startButton.style.paddingLeft.substring(0, startButton.style.paddingLeft.length - 2));
        sidePadding += (sidePadding / 10) + 1;
        if (sidePadding >= 340) sidePadding = 340;
        startButton.style.paddingLeft = startButton.style.paddingRight = sidePadding + "px";
    } else {
        if (!startButton.classList.contains("vibrate-1")) {
            startButton.classList.add("vibrate-1")
        } else {
            startButtonPop()
        }
    }*/
}

async function startButtonPop() {
    startButton.classList.add("scale-out-center")
    playSound(pop)
    let lineCount = 4;
    //for (let i = 1; i < lineCount + 1; i++) {
    for (let i = 1; i < 2; i++) {
        let line = document.getElementById("line" + i)
        for (let j = 0; j < line.innerHTML.length; j++) {
            let replacement = line.innerHTML;
            if (line.innerHTML[j] == "o")
            {
                console.log(j)
                replacement.replace("o", " . ");
                line.innerHTML = replacement
            }
        
            // UNFINISHED
           

            await new Promise(r => setTimeout(r, 100));
        }
    }
}

function playSound(audio) {
    const clone = audio.cloneNode()
    clone.play();
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}