

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

renderbutton();

 function renderbutton(){
   $("#citySearch").empty();
   for (var i = 0; i < namecity.lenght; i ++) {
     var a = $("<a>");
     a.addClass("citylist");

     a.attr("input-name", cityName[i]);
     a.text(cityName[i]);

     $("#citySearch").append(a);

   }

   $("add-city").on("click", function (event) {
     event.preventDefault();
     var cityName=$("#searchList").val().trim();
     if ($("#searchList").val()=== "") {
       return;
     } else {
       cityName.unshift(cityName);

       cityName.pop();
       $("#searchList").val("");
       renderbutton();
     }
   })

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=2c595e5e123bfcd382c19620d3039f87&units=imperial";




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
  var humd  = $("<div>").text("Humidity:" + response.main.humidity + "%");
  weatherData.append(humd);
  var uvInd = $("<div>").text("UV index:" , + response.wind.gust);
  weatherData.append(uvInd);
  var iconURL  = "https://openweathermap.org/img/w/" + response.weather[0].icon +".png"

var cityshow = $("#cityList"); 
cityshow.text(response);

weatherData.append(h1, "<img src=" + icon + ">");

var cityNameURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=2c595e5e123bfcd382c19620d3039f87&units=imperial";

$.ajax({
 URL:cityNameURL,
method:"GET"
}).then(function(response){
  console.log(response);

// forecast day1

  var date1 = $("#day1").text(currentDate);
  var icon  = "https://openweathermap.org/img/w/" + response.list[0].weather[0].icon + iconCode + ".png";
  var temp1=$("<h3>").text("Temperature:" + response.list[0].main.temp + " °F" );
  day1.append(temp1);
  var humd1  = $("<div>").text("Humidity:" + response.list[0].main.humidity + "%");
  day1.append(humd1);
  var uvInd1 = $("<div>").text("UV index:"  + response.list[0].wind.gust);
  day1.append(uvInd1);
  

})

})


// forcast day2

  var date2 = new Date();
  date2.setDate(date2.getDate() + 1);
  var icon = "https://openweathermap.org/img/w/" + response.list[8].weather[0].icon + iconCode + ".png";
  
  var temp2 =$("<h3>").text("temperature:" + response.list[8].main.temp + " °F" );
  day2.append(temp2);
  var humd2  = $("<div>").text("Humidity:" + response.list[8].main.humidity + "%");
  day2.append(humd2);

 


// forcast day3
var date3 = new Date();
date3.setDate(date3.getDate() + 2);
var icon  = "https://openweathermap.org/img/w/" + response.list[16].weather[0].icon + iconCode + ".png";

var temp3 =$("<h3>").text("temperature:" + response.list[16].main.temp + " °F" );
day3.append(temp3);
var humd3  = $("<div>").text("Humidity:" + response.list[16].main.humidity + "%");
day3.append(humd3);





// forcast day4
var date4 = new Date();
date4.setDate(date4.getDate() + 3);
var icon  = "https://openweathermap.org/img/w/" + response.list[24].weather[0].icon + iconCode +".png";

var temp4 =$("<h3>").text("temperatur:" + response.list[24].main.temp + " °F" );
day4.append(temp4);
var humd4  = $("<div>").text("Humidity:" + response.list[24].main.humidity + "%");
day4.append(humd4);



  
// forcast day5
var date5 = new Date();
date5.setDate(date5.getDate() + 4);
var icon  = "https://openweathermap.org/img/w/" + response.list[32].weather[0].icon + iconCode + ".png";

var temp5 =$("<h3>").text("temperatur:" + response.list[32].main.temp + " °F" );
day5.append(temp5);
var humd5  = $("<div>").text("Humidity:" + response.list[32].main.humidity + "%");
day5.append(humd5);

}

});
