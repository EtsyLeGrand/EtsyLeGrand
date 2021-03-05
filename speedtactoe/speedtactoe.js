function page2Tuto()
{
    document.body.innerHTML = "<div class='container'><div class='vertical-center center'><h3>Chaque joueur a 10 secondes en banque.</h3><br><h4>Au début de la partie, chaque joueur aura 3 secondes pour placer son jeton.<br>Ce temps diminuera au fil des Tic-tac-toes.</h4><br><h4>Un joueur qui dépasse le temps alloué pour placer son jeton utilise son temps en banque.</h4><br><h3>Un joueur perd s'il n'a plus de temps en banque ou s'il perd <br>3 parties de Tic-tac-toe.</h3><br><button class='button' type='submit' onclick='loadmain();'>Jouer maintenant</button></div></div>";
}

function loadmain()
{
    document.body.innerHTML = "<div class='container'><div class='vertical-center center'><table class='score'><tr><td class='left' style='padding-left: 30px;' id='mScore'>0</td><td class='right' style='padding-right: 30px;' id='kScore'>0</td></tr></table><div class='spacer'></div><table class='tablegame'><tr><td id='Q' onclick='squareClicked(Q)'>Q</td><td id='W' onclick='squareClicked(W)'>W</td><td id='E' onclick='squareClicked(E)'>E</td></tr><tr><td id='A' onclick='squareClicked(A)'>A</td><td id='S' onclick='squareClicked(S)'>S</td><td id='D' onclick='squareClicked(D)'>D</td></tr><tr><td id='Z' onclick='squareClicked(Z)'>Z</td><td id='X' onclick='squareClicked(X)'>X</td><td id='C' onclick='squareClicked(C)'>C</td></tr></table><div class='spacer'></div><table class='tabletime'><tr><td class='left' id='mTime'>3:00</td><td class='right' id='kTime'>3:00</td></tr><tr class='bank'><td class='left' id='mBank'>10:00</td><td class='right' id='kBank'>10:00</td></tr></table></div></div>"
    
    document.getElementById('mScore').innerHTML = 0;
    document.getElementById('kScore').innerHTML = 0;

    document.getElementById('mTime').innerHTML = 3;
    document.getElementById('kTime').innerHTML = 3;

    document.getElementById('mBank').innerHTML = 10;
    document.getElementById('kBank').innerHTML = 10;
    
    timer = window.setInterval(countdown, 100);

    start();
}

var turn = "mouse";
var maxTurnTime = 3;
var field = [[],[]];
var played = 0;
var mTurnTime = kTurnTime = 3;
var mBankTime = kBankTime = 10;
var mScore, kScore = 0;
var timer;

function start()
{
    // timer = window.setInterval(countdown, 100);
    countdown();
}

function countdown()
{
    if (turn == "mouse")
    {
        if (document.getElementById('mTime').innerHTML > 0)
        {
            mTurnTime -= 0.1;
            document.getElementById('mTime').innerHTML = Math.abs(mTurnTime.toFixed(1));
        } else if (document.getElementById('mBank').innerHTML > 0) {
            mBankTime -= 0.1;
            document.getElementById('mBank').innerHTML = Math.abs(mBankTime.toFixed(1));
        } else {
            lose(turn);
        }
    }
    else
    {
        if (document.getElementById('kTime').innerHTML > 0)
        {
            kTurnTime -= 0.1;
            document.getElementById('kTime').innerHTML = Math.abs(kTurnTime.toFixed(1));
        } else if (document.getElementById('kBank').innerHTML > 0) {
            kBankTime -= 0.1;
            document.getElementById('kBank').innerHTML = Math.abs(kBankTime.toFixed(1));
        } else {
            lose(turn);
        }
    }
}

document.addEventListener('keydown', (e) => {
    if (turn != "mouse" && document.getElementById(e.key.toUpperCase())) // Check si le keypress correspond à QWE ASD ZXC
    {
        if (!document.getElementById(e.key.toUpperCase()).style.backgroundImage) // Check si le background est vide
        {
            var temp = document.getElementById(e.key.toUpperCase()).style;
            temp.backgroundImage = "url(./O.png)";
            temp.backgroundRepeat = "no-repeat";
            temp.backgroundSize = "50%";
            temp.backgroundPosition = "center";
            temp.filter = "invert(100%)";

            kTurnTime = maxTurnTime;
            document.getElementById('kTime').innerHTML = Math.abs(kTurnTime.toFixed(1));
            turn = "mouse";

            if (fullGridChecker())
            {
                clearGrid();
            }
        }
    }
});

function squareClicked(square)
{
    if (turn != "keyboard" && !document.getElementById(square.innerHTML).style.backgroundImage) // Check si le background est vide
    {
        var temp = document.getElementById(square.innerHTML).style;
        temp.backgroundImage = "url(./X.png)";
        temp.backgroundRepeat = "no-repeat";
        temp.backgroundSize = "47%";
        temp.backgroundPosition = "center";
        temp.filter = "invert(100%)";

        mTurnTime = maxTurnTime;
        document.getElementById('mTime').innerHTML = Math.abs(mTurnTime.toFixed(1));
        turn = "keyboard";

        if (fullGridChecker())
        {
            clearGrid();
        }
    }
}

function fullGridChecker()
{

}

function clearGrid()
{

}

function lose(loser)
{
    timer = null;
}
//style="background-image:url(./O.png); background-repeat: no-repeat; background-size: 50%; background-position: center; filter: invert(100%);"
//style="background-image:url(./X.png); background-repeat: no-repeat; background-size: 47%; background-position: center; filter: invert(100%);"

