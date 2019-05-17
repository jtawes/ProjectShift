const bands = ["Kiss", "Aerosmith", "ACDC", "Led Zeppelin", "Nickelback"];

function favoriteBandAlert(bands) {
	alertString = "";
	for(var i = 0; i < bands.length; i++) {
		if(bands[i] == "Nickelback") {
			alertString = "I DON'T love " + bands[i] + "!";
		} else {
			alertString = "I love " + bands[i];
		}
		alert(alertString);
	}
} 

favoriteBandAlert(bands);