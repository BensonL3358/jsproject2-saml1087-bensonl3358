// Set-up
var userBorough = prompt("Which borough population do you want to learn about?")

$.ajax({
    url: 'https://data.cityofnewyork.us/resource/xywu-7bv9.json',
    dataType: 'json',
    success: function(data) {
        // console.log(data);
        console.log("test")
        for (var i = 0; i < data.length; i++) {
            if (data[i].borough == ("   " + userBorough)){
                var population = (data[i]["_2020"])
                var percentage = (data[i]["_2020_boro_share_of_nyc_total"])
                document.write("There are " + population + " people in " + userBorough + "<br>")
                document.write("This is the percentage of the NYC Total Population: " + percentage + "% <br>")
            }
        }
    }
});
