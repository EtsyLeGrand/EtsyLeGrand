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
    loadLevel1();
}

function playSound(audio) {
    const clone = audio.cloneNode();
    clone.play();
}

function destroyBody() {
    document.getElementById("main-body").innerHTML = "";
}

function loadLevel1() {
    document.getElementById("main-body").innerHTML += "<div id='no-drop' class='drag-drop'> #no-drop </div><div id='yes-drop' class='drag-drop'> #yes-drop </div><div id='outer-dropzone' class='dropzone'>#outer-dropzone<div id='inner-dropzone' class='dropzone'>#inner-dropzone</div></div>"
}

function dragMoveListener (event) {
  var target = event.target,
      // keep the dragged position in the data-x/data-y attributes
      x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
      y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

  // translate the element
  target.style.webkitTransform =
  target.style.transform =
    'translate(' + x + 'px, ' + y + 'px)';

  // update the posiion attributes
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
}

interact('.dropzone').dropzone({
    // only accept elements matching this CSS selector
    accept: '#yes-drop',
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.75,
  
    // listen for drop related events:
  
    ondropactivate: function (event) {
      // add active dropzone feedback
      event.target.classList.add('drop-active')
    },
    ondragenter: function (event) {
      var draggableElement = event.relatedTarget
      var dropzoneElement = event.target
  
      // feedback the possibility of a drop
      dropzoneElement.classList.add('drop-target')
      draggableElement.classList.add('can-drop')
      draggableElement.textContent = 'Dragged in'
    },
    ondragleave: function (event) {
      // remove the drop feedback style
      event.target.classList.remove('drop-target')
      event.relatedTarget.classList.remove('can-drop')
      event.relatedTarget.textContent = 'Dragged out'
    },
    ondrop: function (event) {
      event.relatedTarget.textContent = 'Dropped'
    },
    ondropdeactivate: function (event) {
      // remove active dropzone feedback
      event.target.classList.remove('drop-active')
      event.target.classList.remove('drop-target')
    }
  })
  
  interact('.drag-drop')
    .draggable({
      inertia: true,
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'parent',
          endOnly: true
        })
      ],
      autoScroll: true,
      // dragMoveListener from the dragging demo above
      listeners: { move: dragMoveListener }
    })