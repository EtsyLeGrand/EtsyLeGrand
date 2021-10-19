const pump = new Audio('./audio/sfx/pump.mp3');
const pop = new Audio('./audio/sfx/pop.mp3');
const squeeze = new Audio('./audio/sfx/squeeze.mp3');

function startButtonClick() {
    let startButton = document.getElementById("startButton");
    if (startButton.style.paddingLeft == "") {
        playSound(pump);
        startButton.style.paddingLeft = startButton.style.paddingRight = "19px";
    } else if (startButton.style.paddingLeft != "340px") {
        playSound(pump);
        let sidePadding = parseInt(startButton.style.paddingLeft.substring(0, startButton.style.paddingLeft.length - 2));
        sidePadding += (sidePadding / 10) + 1;
        if (sidePadding >= 340) sidePadding = 340;
        
        startButton.style.paddingLeft = startButton.style.paddingRight = sidePadding + "px";
    } else {
        if (!startButton.classList.contains("vibrate-1")) {
            startButton.classList.add("vibrate-1");
            playSound(squeeze);
        } else {
            startButtonPop();
        }
    }
}

async function startButtonPop() {
    startButton.classList.add("scale-out-center");
    playSound(pop);
    let linecount = 5;
    for (let i = 1; i < linecount + 1; i++) {
        let line = document.getElementById("line" + i);
        for (let j = 0; j < line.innerHTML.length; j++) {
            let replacement = line.innerHTML;
            if (line.innerHTML.charAt(j) == "o")
            {
                replacement = replacement.slice(0, j) + " . " + replacement.slice(j+1);
                line.innerHTML = replacement;
                playSound(pop);
                await new Promise(r => setTimeout(r, 100));
            }
        }
    }

    await new Promise(r => setTimeout(r, 500));

    for (let i = linecount; i > 0 ; i--) {
        let line = document.getElementById("line" + i);
        line.classList.add("vibrate-1");
        playSound(squeeze);
        await new Promise(r => setTimeout(r, 100));
    }

    await new Promise(r => setTimeout(r, 500));

    for (let i = linecount; i > 0 ; i--) {
        let line = document.getElementById("line" + i);
        line.classList.add("scale-out-center");
        playSound(pop);
        await new Promise(r => setTimeout(r, 100));
    }

    destroyBody();

}

function playSound(audio) {
    const clone = audio.cloneNode();
    clone.play();
}

function destroyBody() {
    document.getElementById("main-body").innerHTML = "";
}