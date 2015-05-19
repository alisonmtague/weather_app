$(document).ready(function(){
	$("#search").on("submit", function(event){
		event.preventDefault();
		var input = $("#search-zip").val();
		var apikey_ww = "a531df13fffd41b9bd2039255bb77";
		var url_ww = "http://api.worldweatheronline.com/free/v2/weather.ashx" + "?key=" + apikey_ww + "&q=" + input + "&format=json" + "&num_of_results=1";
		$.ajax({
			url: url_ww,
			dataType: "jsonp",
			method: "GET",
			success: function(parsed_json){
				var temp_f = parsed_json['data']['current_condition'][0]['temp_F'];
				var temp_c = parsed_json['data']['current_condition'][0]['temp_C'];
				console.log(temp_f);
				console.log(temp_c);
				$("#temp-f h3").text(temp_f + "°F").css('padding', '60px')
				$("#temp-c h3").text(temp_c + "°C").css('padding', '40px')
			}
		})
		var apikey_openweather = "534f609c3e5bb2f40d98247a489b29a1";
		var url_openweather = "http://api.openweathermap.org/data/2.5/weather?zip=" + input + "&APPID=" + apikey_openweather ;
		
		$.ajax({
			url: url_openweather,
			dataType: "jsonp",
			method: "GET",
			success: function(parsed_json){
				var name = parsed_json['name'];
				var temp_kelvin = parsed_json['main']['temp'];
				var temp_f2 = ((temp_kelvin - 273.15)*1.8000 + 32.00);
				var temp_c2 = (temp_kelvin - 273.15);
				console.log(temp_f2);
				console.log(temp_c2);
				$("#name h2").text(name);
			}
		})
	// var average = function(x, y){
	// 	return (x + y)/2;
	// }
	// console.log(average(temp_f, temp_f2));
	// console.log(average(temp_c, temp_c2));
	// console.log(temp_f2);
		this.reset();
	})
});










