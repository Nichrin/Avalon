function logout() {
    room = document.getElementById("")
    window.location ="index.html"
}
function move() {
    game = document.getElementById("chess").value;
    localStorage.setItem("Chess_bot",game);
    window.location = "chess.html"
}
function place() {
    game = document.getElementById("ludo").value;
    localStorage.setItem("Ludo_bot",game);
    window.location = "ludo.html"
}
function hit() {
    game = document.getElementById("take").value;
    localStorage.setItem("Carrom_bot",game);
    window.location = "carrom.html"
}
function cards() {
    game = document.getElementById("cards").value;
    localStorage.setItem("Monopoly_bot",game);
    window.location = "monopoly.html"
}
