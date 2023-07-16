setInterval(function () {
  let londonDateElement = document.querySelector("#london .date");
  if (londonDateElement) {
    let londonDate = moment().tz("Europe/London").format("MMMM Do YYYY");
    londonDateElement.innerHTML = londonDate;

    let londonCurrentTimeElement = document.querySelector("#london .time");
    let londonCurrentTime = moment()
      .tz("Europe/London")
      .format("hh:mm:ss [<small>]A[</small>]");
    londonCurrentTimeElement.innerHTML = londonCurrentTime;
  }

  let parisDateElement = document.querySelector("#paris .date");
  if (parisDateElement) {
    let parisDate = moment().format("MMMM Do YYYY");
    parisDateElement.innerHTML = parisDate;

    let parisCurrentTimeElement = document.querySelector("#paris .time");
    let parisCurrentTime = moment()
      .tz("Europe/Paris")
      .format("hh:mm:ss [<small>]A[</small>]");
    parisCurrentTimeElement.innerHTML = parisCurrentTime;
  }

  let newYorkDateElement = document.querySelector("#new-york .date");
  if (newYorkDateElement) {
    let newYorkDate = moment().format("MMMM Do YYYY");
    newYorkDateElement.innerHTML = newYorkDate;

    let newYorkCurrentTimeElement = document.querySelector("#new-york .time");
    let newYorkCurrentTime = moment()
      .tz("America/New_York")
      .format("hh:mm:ss [<small>]A[</small>]");
    newYorkCurrentTimeElement.innerHTML = newYorkCurrentTime;
  }
}),
  1000;

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="row">
                <div class="col-6">
                    <h2>${cityName}</h2>
                    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
                </div>
                <div class="col-6">
                    <div class="time">${cityTime.format(
                      "h:mm:ss"
                    )} <small>${cityTime.format("A")}</small>
                    </div>
                </div>
            </div>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
