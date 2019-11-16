

var btn = $("#add-city");
var search = $("#citySearch");
var namecity = ["Los Angeles", "San francisco", "Seattle", "Chicago", "Denver"];
 
var date = new Date();
var currentDate = date.toLocaleDateString();
var cityList =$("#cityList");



renderbutton();

function renderbutton(){
$("#cityList").empty();
for (var i = 0; i < namecity.lenght; i ++) {
var a = $("<a>");
a.addClass("list-a");

a.attr("input-name", cityname[i]);
a.text(namecity[i]);

$("#cityList").append(a);

}



$("citySearch").on("click", function (event) {

  event.preventDefault();
  var cityName=$("add-city").val().trim();
  if ($("#add-city").val()=== "") {
    return;
  } else {

    namecity.unshift(cityName);

    namecity.pop();

    $("#searchList").val("");
    renderbutton();

}
});

$(".citylist-a").on("click", function(event){
  event.preventDefault();



});

search.on("click", function(event) {
  event.preventDefault();
 
var city =btn.val(); 

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +city + "&APPID=2c595e5e123bfcd382c19620d3039f87&units=imperial";


$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  $("#display-top").empty();
  var weatherData = $("#display-top");

  
  

  var icon  = "https://openweathermap.org/img/w/" + response.weather[0].icon +".png"
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +city + "&APPID=2c595e5e123bfcd382c19620d3039f87&units=imperial";
  var UVindexURL = "https://api.openweathermap.org/data/2.5/uvi?APPID=2c595e5e123bfcd382c19620d3039f87"

  var h2     = $("<div>").text(response.name +"(" + currentDate +")");
  var temperature  = $("<div>").text("Temperature:" + response.main.temp + " °F" );
  
  var windSpd = $("<div>").text("Speed:"+ response.wind.speed + "mph");
  
  var humd  = $("<div>").text("Humidity:" + response.main.humidity + "%");
  
  var UVInd = $("<div>").text("UV index:" , + response.wind.gust);
  
  
  weatherData.append(h2);
  weatherData.append(h2, "<img src=" + icon + ">");
  weatherData.append(temperature);
  weatherData.append(windSpd);
  weatherData.append(humd);
  weatherData.append(uvInd);


});



// 5 day forecast

var api = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=2c595e5e123bfcd382c19620d3039f87&units=imperial";
var icon  = "https://openweathermap.org/img/w/" + response.weather[0].icon +".png"

//var icon ="https://openweathermap.org/img/wn/" + response.weather[0].icon +".png"



$.ajax({
url: api,
method: "GET"
}).then(function(response){
 
// forecast day1

  $("#day1").empty();
  var date1 = new Date();
  date1.setDate(date1.getDate()+1);
  var h3 = $("<h3>").text(date1);
  var date1 = $("#day1");

  date1.append(h3);

  weatherData.append(h2, "<img src=" + icon + ">");
  var icon  = "https://openweathermap.org/img/wn/5d@2x.png" + response.list[0].weather[0].icon + icon + ".png";
  var temp1=$("<div>").text("Temperature:" + response.list[0].main.temp + " °F" );
  date1.append(temp1);
  var humd1  = $("<div>").text("Humidity:" + response.list[0].main.humidity + "%");
  date1.append(humd1);

  

  
 
//forcast day2

  $("#day2").empty();
  var date2 = new Date();
  date2.setDate(date2.getDate() + 2);
  //var day2 = nday2.toLocaleDateString();
  var h3 = $("<h3>").text(date2);
  var date2 = $("#day2");

  //var icon = "https://openweathermap.org/img/w/" + response.list[8].weather[0].icon + iconCode + ".png";
  //var h3 = $("h3").text(response.name + currentDate + 3);
  date2.append(h3);
  var temp2 =$("<div>").text("Temperature: " + response.list[8].main.temp + " °F" );
  date2.append(temp2);
  var humd2  = $("<div>").text("Humidity: " + response.list[8].main.humidity + "%");
  date2.append(humd2);

 


// forcast day3

  $("#day3").empty();
  var date3 = new Date();
  date3.setDate(date3.getDate() + 3);
  //var day2 = nday2.toLocaleDateString();
  var h3 = $("<h3>").text(date3);
  var date3 = $("#day3");

  //var icon = "https://openweathermap.org/img/w/" + response.list[8].weather[0].icon + iconCode + ".png";
  //var h3 = $("h3").text(response.name + currentDate + 3);
  date3.append(h3);
  var temp2 =$("<div>").text("Temperature: " + response.list[8].main.temp + " °F" );
  date3.append(temp2);
  var humd2  = $("<div>").text("Humidity: " + response.list[8].main.humidity + "%");
  date3.append(humd2);



// forcast day4

  $("#day4").empty();
  var date4 = new Date();
  date4.setDate(date4.getDate() + 4);
  //var day2 = nday2.toLocaleDateString();
  var h3 = $("<h3>").text(date4);
  var date4 = $("#day4");

  //var icon = "https://openweathermap.org/img/w/" + response.list[8].weather[0].icon + iconCode + ".png";
  //var h3 = $("h3").text(response.name + currentDate + 3);
  date4.append(h3);
  var temp2 =$("<div>").text("Temperature: " + response.list[8].main.temp + " °F" );
  date4.append(temp2);
  var humd2  = $("<div>").text("Humidity: " + response.list[8].main.humidity + "%");
  date4.append(humd2);

  
// forcast day5

  $("#day5").empty();
  var date5 = new Date();
  date5.setDate(date5.getDate() + 5);
  //var day2 = nday2.toLocaleDateString();
  var h3 = $("<h3>").text(date5);
  var date5 = $("#day5");

  //var icon = "https://openweathermap.org/img/w/" + response.list[8].weather[0].icon + iconCode + ".png";
  //var h3 = $("h3").text(response.name + currentDate + 3);
  date5.append(h3);
  var temp2 =$("<div>").text("Temperature: " + response.list[8].main.temp + " °F" );
  date5.append(temp2);
  var humd2  = $("<div>").text("Humidity: " + response.list[8].main.humidity + "%");
  date5.append(humd2);

});

});
}
