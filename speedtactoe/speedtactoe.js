function page2Tuto()
{
    document.body.innerHTML = "<div class='container'><div class='vertical-center center'><h3>Chaque joueur a 10 secondes en banque.</h3><br><h4>Au début de la partie, chaque joueur aura 3 secondes pour placer son jeton.<br>Ce temps diminuera au fil des Tic-tac-toes.</h4><br><h4>Un joueur qui dépasse le temps alloué pour placer son jeton utilise son temps en banque.</h4><br><h3>Un joueur perd s'il n'a plus de temps en banque ou s'il perd <br>3 parties de Tic-tac-toe.</h3><br><button class='button' type='submit' onclick='loadmain();'>Jouer maintenant</button></div></div>";
}

function loadmain()
{
    document.body.innerHTML = "<div class='container'><div class='vertical-center center'></div></div>"
}