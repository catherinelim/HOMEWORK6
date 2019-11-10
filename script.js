
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

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q="+ city +"&APPID=2c595e5e123bfcd382c19620d3039f87";




$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  $("#display").empty();
  var weatherData = $("#display");

  console.log(response.coord.lon);

  var h = $("h").text(response.namecity +"(" + currentDate +")");
  var p1= $("<div>").text("temp_max" + response.main.temp_max);
  var cityshow = $("#cityList");

cityshow.text(response.coord.lon);
 
});
  

});



// function renderButton () {
// $("#buttons-view").empty();

// for (var i = 0 ;i<data.lenght; i++) {
//   var a =button;
//   a.addClass("weather-data")
// }


//  }

  


 
