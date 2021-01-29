$(document).ready(function () {

    // added an eventlistener to Submit button
    $('#form-submit').submit(function(event) {
        performSearch(event);
    });

});

function performSearch(event) {
    var request;
    event.preventDefault();

    request = $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather',
        type: 'GET',
        data: {
            q: $("#city").val()
            appid: "df50ae2fd0ab218ec984115a69f5ef16",
            units: 'imperial'
        }
    });
    request.done(function(response){
        formatSearch(response)
    });
}

function formatSearch(jsonObject){
var city_name = jsonObject.name;
var city_weather = jsonObject.weather[0].main;
var city_temp = jsonObject.main.temp;

$("#city-name").text(city_name);
$("#city-weather").text(city_weather);
$("#city-tempt").text(city_temp + "imperial");

}