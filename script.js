

 var btn = $("#add-city");
 var search = $("#citySearch");
 var namecity = ["Los Angeles", "San francisco", "Seattle", "Chicago", "Denver"];
 
 var date = new Date();
 var currentDate = date.toLocaleDateString();
 
 var cityList =$("#cityList");

var day1 = $("#day1");
var day2 = $("#day2");
var day3 = $("#day3");
var day4 = $("#day4");
var day5 = $("#day5");

btn.on("click", function(event) {
  event.preventDefault();
 

var city =search.val(); 

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=2c595e5e123bfcd382c19620d3039f87" + "&units=imperial";




$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  $("#display-top").empty();
  var weatherData = $("#display-top");

  console.log(response);

  var h1     = $("<h1>").text(response.namecity +"(" + currentDate +")");
  weatherData.append(h1);
  var temperature  = $("<div>").text("Temperature:" + response.main.temp + " °F" );
  weatherData.append(temperature);
  var windSpd = $("<div>").text("Speed:"+ response.wind.speed + "MPH");
  weatherData.append(windSpd);
  var humd  = $("<div>").text("Humidity:" + response.humidity + "%");
  weatherData.append(humd);
  var uvInd = $("<div>").text("UV index:" , + response.wind.gust);
  weatherData.append(uvInd);
  var icon  = "https://openweathermap.org/img/w/" + response.weather[0].icon +".png"

var cityshow = $("#cityList"); 
cityshow.text(response);

weatherData.append(h, "<img src=" + icon + ">");

var fcastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial" + "&APPID=2c595e5e123bfcd382c19620d3039f87";

$.ajax({
 url:fcastURL,
method:"GET",
}).then(function(response){
  console.log(response)
})
})
// forcast day1 


 

  

});





  


 
