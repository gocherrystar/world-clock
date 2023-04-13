setInterval(function () {
let budapestElement = document.querySelector("#budapest");
if (budapestElement) {
let budapestDateElement = budapestElement.querySelector(".date");
let budapestTimeElement = budapestElement.querySelector(".time");
let budapestTime = moment().tz("Europe/Budapest");


budapestDateElement.innerHTML = budapestTime.format("MMMM Do YYYY");
budapestTimeElement.innerHTML = `${budapestTime.format("h:mm:ss")} <small>${budapestTime.format("A")}</small>`;
}}, 1000);   



function updateSanPauloTime () {
let saoPauloElement = document.querySelector("#sao-paulo");
if (saoPauloElement) {
let saoPauloDateElement = saoPauloElement.querySelector(".date");
let saoPauloTimeElement = saoPauloElement.querySelector(".time");
let saoPauloTime = moment().tz("America/Sao_Paulo");

saoPauloDateElement.innerHTML = saoPauloTime.format("MMMM Do YYYY");
saoPauloTimeElement.innerHTML = saoPauloTime.format("h:mm:ss [<small>]A[</h:mm:sssmall>]");
}
}

updateSanPauloTime();
setInterval(updateSanPauloTime, 1000);

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", "").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `  
    <div class="city">
        <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
        </div>
        <div><a href="index.html">All cities</a></div>`;
        
       
}

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);

