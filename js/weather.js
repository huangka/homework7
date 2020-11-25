function gettingJSON(){
    
     //Display the forecast
    // Your code here.

    //Set default location if one isn't provided
    let location;
    
    location = document.querySelector("#location").value;
    if (location == "") {
        location = "Ann Arbor";

    }
    // Your code here.
    console.log("Location is : " + location);

    

    //set default temperature format if one isn't provided
    let format;
    let units;

    if (document.querySelector("#celcius").checked) {
        format = "Celcius"
        units = document.querySelector("#celcius").getAttribute("value");
    }
    else {
        format = "Fahrenheit";
        units = document.querySelector("#fahrenheit").getAttribute("value");
    }


    // Your code here.
    console.log("Format is " + format);

   
    //set the query  
    let query;
    let city;
    let zip;
    let countryCode;
    key = "76e350a98a4f0d541165972767f3314c";
    isCity = false;
    
    let locationArray = location.split(",");
    const locationArrayLength = locationArray.length;
    console.log(locationArray);
    //check to see if this is not a number
    if (isNaN(locationArray[0]) == true) {
        city = locationArray[0];
        isCity = true;
    } else {
        zip = locationArray[0];
    }

    if (locationArrayLength == 2) {
        countryCode = locationArray[1];
        countryCode= countryCode.replace(/\s/g, '');
    
    }
  
   //Default A2
   if (isCity == true && locationArrayLength == 1){
       query = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key + "&units=" + units;
    } else if (isCity == true && locationArrayLength == 2){
       query = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + countryCode +  "&appid=" + key + "&units=" + units;
    } else {
        console.log('inside zip condition, printing countryCode: ', countryCode)
        query = "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + "," + countryCode + "&appid=" + key + "&units=" + units;
    }
   
   
    // Your code here.  
    
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, highs and lows, 
    //the image, etc.

    let loc = document.querySelector("#loc");
    let temp = document.querySelector("#temp");
    let tempImg = document.querySelector("#tempImg");
    // Your code here.

    
    
    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        console.log(json);
        loc.innerHTML = json["name"];
        temp.innerHTML = json["main"]["temp"] + " with " + json["weather"][0]["description"];
        tempImg.setAttribute("src", "http://openweathermap.org/img/wn/" + json["weather"][0]["icon"] + ".png");
        tempImg.setAttribute("alt", json["weather"][0]["description"]);
        
    

    });
    document.querySelector("#forecast").style.display = "block";
};

    
    
    
    
    
    
    
    
    
    