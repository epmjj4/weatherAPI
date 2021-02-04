$(document).ready(function () {

    var searchVal = $('#search-value');
    var searchBtn = $('#search-button');
    var cityHist = $('.city-history');
    var todayWeath = $('#today');
    var foreCast = $('#forecast');


    function grabUserInfo() {
        //
        searchVal = $('#search-value').val();
        var liEl = $('<li>');
        $(liEl).text(searchVal);
        cityHist.prepend(liEl);


    };

    function grabUserWeather() {
        //grab city input from user using API and displaying it on the webpage
        //I want to pull the Title of city, Humidity, Temp, and Windspeed and display it to an h2 tag
        var title = $('<h4>').addClass('card-title').text(searchVal);
        $(todayWeath).append(title);


        var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchVal + "&appid=df50ae2fd0ab218ec984115a69f5ef16";

        $.ajax({
            url: queryUrl,
            Method: "Get"
        }).then(function (response) {
            console.log(queryUrl);
            console.log(response.main.temp);
            console.log(response.wind.speed);
            console.log(response.main.humidity);

            //var temp1 = response.main.temp;


            var temp = $('<h3>').addClass('card-title').text(response.main.temp);
            var speed = $('<h3>').addClass('card-title').text(response.wind.speed);
            var humidity = $('<h3>').addClass('card-title').text(response.main.humidity);
            todayWeath.append(temp, speed, humidity);

        });






        // var temp = $('<p>').addClass('card-text').text("Temperature: " + res.main.temp + "°F");
        // var humid = $('<p>').addClass('card-text').text("Humidity: " + res.main.humidity + "%");
        // var wind = $('<p>').addClass('card-text').text("Wind: " + res.wind.speed + "MPH");

    }

    $(searchBtn).on('click', function () {
        console.log("I have been clicked");
        grabUserInfo();
        grabUserWeather();
    });

















    // // added an eventlistener to Search button
    // var history = [];
    // //on click function to grab user input city
    // $("#search-button").on('click', function () {
    //     // grab the city and put in the variable
    //     var cityInput = $('#search-value').val();

    //    // $('#search-value').val('');
    //     performSearch(cityInput);

    // });

    // //created an li tag to 
    // function makeList(val) {
    //     var liEl = $('<li>').addClass('list-group-item list-group-item-action').text(val);
    //     $('.city-history').append(liEl);

    // }

    // $('.city-history').on('click', 'li', function () {
    //     performSearch($(this).text());
    // });



    // function performSearch(cityInput) {

    //     var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=df50ae2fd0ab218ec984115a69f5ef16"
    //     $.ajax({
    //         url: queryURL,
    //         method: 'GET',
    //      //   dataType: "json"
    //     }).then(function (res) {
    //         if(history.indexOf(cityInput)=== -1){

    //             history.push(cityInput)
    //             window.localStorage.setItem("history", JSON.stringify(history));
    //           makeList(cityInput);
    //         }
    //         //this will empty user info in input field
    //         $('#today').empty();
    //         //creating html elements in order to show today's weather on html page
    //          var card = $('<div>').addClass('card');
    //          var cardBody = $('div').addClass('card-body');
    //         var title = $('<h4>').addClass('card-title').text(res.name + " (" + new Date().toLocaleDateString() + ")");
    //         var temp = $('<p>').addClass('card-text').text("Temperature: " + res.main.temp + "°F");
    //         var humid = $('<p>').addClass('card-text').text("Humidity: " + res.main.humidity + "%");
    //         var wind = $('<p>').addClass('card-text').text("Wind: " + res.wind.speed + "MPH");
    //        // make image variable here. 

    //        var image = ""
    //        title.append(image);
    //         cardBody.append(title, temp, humid, wind);
    //      //   card.append(cardBody);
    //     //     $('#today').append(card);
    //     //     console.log(res);


    //      })

    // }

    // function formatSearch(jsonObject) {
    //     var city_name = jsonObject.name;
    //     var city_weather = jsonObject.weather[0].main;
    //     var city_temp = jsonObject.main.temp;

    //     $("#city-name").text(city_name);
    //     $("#city-weather").text(city_weather);
    //     $("#city-tempt").text(city_temp + "imperial");

    // }

});