setInterval(function () {
let budapestElement = document.querySelector("#budapest");
let budapestDateElement = budapestElement.querySelector(".date");
let budapestTimeElement = budapestElement.querySelector(".time");
let budapestTime = moment().tz("Europe/Budapest");


budapestDateElement.innerHTML = budapestTime.format("MMMM Do YYYY");
budapestTimeElement.innerHTML = `${budapestTime.format("h:mm:ss")} <small>${budapestTime.format("A")}</small>`;
}, 1000);   

function updateSanPauloTime () {
let saoPauloElement = document.querySelector("#sao-paulo");
let saoPauloDateElement = saoPauloElement.querySelector(".date");
let saoPauloTimeElement = saoPauloElement.querySelector(".time");
let saoPauloTime = moment().tz("America/Sao_Paulo");

saoPauloDateElement.innerHTML = saoPauloTime.format("MMMM Do YYYY");
saoPauloTimeElement.innerHTML = saoPauloTime.format("h:mm:ss  [<small>]A[</small>]");
}

updateSanPauloTime();
setInterval(updateSanPauloTime, 1000);