setInterval(function () {
  let londonDateElement = document.querySelector("#london .date");
  let londonDate = moment().tz("Europe/London").format("MMMM Do YYYY");
  londonDateElement.innerHTML = londonDate;

  let londonCurrentTimeElement = document.querySelector("#london .time");
  let londonCurrentTime = moment()
    .tz("Europe/London")
    .format("hh:mm:ss [<small>]A[</small>]");
  londonCurrentTimeElement.innerHTML = londonCurrentTime;

  let parisDateElement = document.querySelector("#paris .date");
  let parisDate = moment().format("MMMM Do YYYY");
  parisDateElement.innerHTML = parisDate;

  let parisCurrentTimeElement = document.querySelector("#paris .time");
  let parisCurrentTime = moment()
    .tz("Europe/Paris")
    .format("hh:mm:ss [<small>]A[</small>]");
  parisCurrentTimeElement.innerHTML = parisCurrentTime;

  let newYorkDateElement = document.querySelector("#new-york .date");
  let newYorkDate = moment().format("MMMM Do YYYY");
  newYorkDateElement.innerHTML = newYorkDate;

  let newYorkCurrentTimeElement = document.querySelector("#new-york .time");
  let newYorkCurrentTime = moment()
    .tz("America/New_York")
    .format("hh:mm:ss [<small>]A[</small>]");
  newYorkCurrentTimeElement.innerHTML = newYorkCurrentTime;
}),
  1000;
