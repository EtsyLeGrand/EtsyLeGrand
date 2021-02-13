var pre1 = false;

function checkPre1() {
    alert("You selected some text!");
}

var t = '';
function gText(e) {
    t = (document.getElementById("ee1")) ? document.getSelection().text : document.getSelection();

    document.getElementById('input').value = t;
    console.log(t.toString());
}

document.onmouseup = gText;
if (!document.getElementByTagName("ee1")) document.addEventListener(Event.MOUSEUP);