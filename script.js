// Set-up (Storing User Input)
var userBorough = prompt("Which borough population do you want to learn about?")
var userYear = prompt("What year of the population do you want to see (1950 - 2040) (Enter by 10s)")

//API Grabber
$.ajax({
    url: 'https://data.cityofnewyork.us/resource/xywu-7bv9.json',
    dataType: 'json',
    success: function(data) {
        // console.log(data);
        console.log("test")
        for (var i = 0; i < data.length; i++) { // Loops through data array
            if (data[i].borough == ("   " + userBorough)){ // Checks if borough is equal to userBorough
                var population = (data[i]["_" + userYear]) // Grabs Property called _(userYear)
                var percentage = (data[i]["_" + userYear + "_boro_share_of_nyc_total"]) //Grabs property called _(userYear)_boro_share_of_nyc_total

                document.write("There are " + population + " people in " + userBorough + " in " + userYear + ".<br>")
                document.write("This is " + percentage + "% of the total population in NYC. <br>")
            }
        }
    }
});
