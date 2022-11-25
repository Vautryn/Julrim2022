const password = "jakobärbäst123";

$("#rimeButton").on("click", function() {
    $(this).hide();

    let audio = new Audio('Julrim2022.mp3');
    audio.play();

    $("h2").each(function(i) {
        $(this).delay(i*4500).animate({opacity: 1}, {duration: 3000});
    });
    $("#giftButton").delay(36500).fadeIn(1000);
});

$("#giftButton").on("click", function() {
    let code = prompt("Skriv in din kod för att se din julklapp");
    if (code == password)
    {
        window.location.href = "https://www.osterlentrail.se/ekopark-trail-13km.html";
    }
    else if (code != null)
        alert("Hoppsan! Du har kanske druckit lite mycket vin? Försök igen!");
});

$("h1").delay(5000).fadeIn(4000);
$("#rimeButton").delay(8500).fadeIn(2000);