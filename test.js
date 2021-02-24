function init()
{
    const rowCount = 11;
    var pieces = document.getElementById("pieces");
    var checker = document.getElementById("checker");
    var piecesContent = new Array(rowCount);
    var checkerContent = new Array(rowCount);
    for (var i=0; i < rowCount; i++)
    {
        piecesContent += "<tr><td><div class='pastille empty'</div></td><td><div class='pastille empty'</div></td><td><div class='pastille empty'</div></td><td><div class='pastille empty'</div></td></tr>";
    }
    pieces.innerHTML = piecesContent.replace(/,/g, "");

    for (var i=0; i < rowCount; i++)
    {
        checkerContent += "<tr><td><div class='pastille sEmpty'</div></td><td><div class='pastille sEmpty'</div></td></tr><tr><td><div class='pastille sEmpty'</div></td><td><div class='pastille sEmpty'</div></td></tr>";
    }
    checker.innerHTML = checkerContent.replace(/,/g, "");
}