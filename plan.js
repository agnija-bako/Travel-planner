//Images declared
const nyImg = document.getElementById("new-york-img");
const ny = document.getElementById("ny-col");
const moscowImg = document.getElementById("moscow-img");
const moscow = document.getElementById("moscow-col");
const parisImg = document.getElementById("paris-img");
const paris = document.getElementById("paris-col");
const osloImg = document.getElementById("oslo-img");
const oslo = document.getElementById("oslo-col");
const shanghaiImg = document.getElementById("shanghai-img");
const shanghai = document.getElementById("shanghai-col");
const romeImg = document.getElementById("rome-img");
const rome = document.getElementById("rome-col");
const berlinImg = document.getElementById("berlin-img");
const berlin = document.getElementById("berlin-col");
const barcelonaImg = document.getElementById("barcelona-img");
const barcelona = document.getElementById("barcelona-col");
const athensImg = document.getElementById("athens-img");
const athens = document.getElementById("athens-col");
const lisbonImg = document.getElementById("lisbon-img");
const lisbon = document.getElementById("lisbon-col");

//Buttons declared
const nyButton = document.getElementById("ny-btn");
const shanghaiButton = document.getElementById("shanghai-btn");
const osloButton = document.getElementById("oslo-btn");
const moscowButton = document.getElementById("moscow-btn");
const parisButton = document.getElementById("paris-btn");
const romeButton = document.getElementById("rome-btn");
const berlinButton = document.getElementById("berlin-btn");
const barcelonaButton = document.getElementById("barcelona-btn");
const athensButton = document.getElementById("athens-btn");
const lisbonButton = document.getElementById("lisbon-btn");


//New York - button appear on mouse hover
nyImg.addEventListener("mouseenter", function( event ) {
    var button = document.getElementById("ny-btn")
    nyImg.classList.remove("img-thumbnail")
    button.style.opacity = 1;

    });

//New York - button disappear on mouse hover
ny.addEventListener("mouseleave", function(){
    var button = document.getElementById("ny-btn");
    button.style.opacity = 0;
    nyImg.classList.add("img-thumbnail");
});

//Moscow - button appear on mouse hover
moscowImg.addEventListener("mouseenter", function( event ) {
    var button = document.getElementById("moscow-btn")
    moscowImg.classList.remove("img-thumbnail")
    button.style.opacity = 1;
    });

//Moscow - button disappear on mouse hover
moscow.addEventListener("mouseleave", function(){
    var button = document.getElementById("moscow-btn");
    button.style.opacity = 0;
    moscowImg.classList.add("img-thumbnail")
});


//Paris - button appear on mouse hover
parisImg.addEventListener("mouseenter", function( event ) {
    var button = document.getElementById("paris-btn")
    parisImg.classList.remove("img-thumbnail")
    button.style.opacity = 1;
    });

//Paris- button disappear on mouse hover
paris.addEventListener("mouseleave", function(){
    var button = document.getElementById("paris-btn");
    button.style.opacity = 0;
    parisImg.classList.add("img-thumbnail")
});


//Oslo - button appear on mouse hover
osloImg.addEventListener("mouseenter", function( event ) {
    var button = document.getElementById("oslo-btn")
    osloImg.classList.remove("img-thumbnail")
    button.style.opacity = 1;
    });

//Oslo - button disappear on mouse hover
oslo.addEventListener("mouseleave", function(){
    var button = document.getElementById("oslo-btn");
    button.style.opacity = 0;
    osloImg.classList.add("img-thumbnail")
});

//Shanghai - button appear on mouse hover
shanghaiImg.addEventListener("mouseenter", function( event ) {
    console.log("enterered");
    var form = document.getElementsByClassName("shanghai-form");
    var button = document.getElementById("shanghai-btn")
    shanghaiImg.classList.remove("img-thumbnail")
    button.style.opacity = 1;
    });

//Shanghai - button disappear on mouse hover
shanghai.addEventListener("mouseleave", function(){
    console.log("left");
    var button = document.getElementById("shanghai-btn");
    button.style.opacity = 0;
    shanghaiImg.classList.add("img-thumbnail")

});


//Rome -button appear on mouse hover
romeImg.addEventListener("mouseenter", function( event ) {
    var button = document.getElementById("rome-btn")
    romeImg.classList.remove("img-thumbnail")
    button.style.opacity = 1;
    });

//Rome - button disappear on mouse hover
rome.addEventListener("mouseleave", function(){
   var button = document.getElementById("rome-btn");
    button.style.opacity = 0;
    romeImg.classList.add("img-thumbnail")
});


//Berlin - button appear on mouse hover
berlinImg.addEventListener("mouseenter", function( event ) {
    var button = document.getElementById("berlin-btn")
    berlinImg.classList.remove("img-thumbnail")
    button.style.opacity = 1;
    });

//Berlin-button disappear on mouse hover
berlin.addEventListener("mouseleave", function(){
    var button = document.getElementById("berlin-btn");
    button.style.opacity = 0;
    berlinImg.classList.add("img-thumbnail")
});

// Barcelona -button appear on mouse hover
barcelonaImg.addEventListener("mouseenter", function( event ) {
    var button = document.getElementById("barcelona-btn")
    barcelonaImg.classList.remove("img-thumbnail")
    button.style.opacity = 1;
    });

//Barcelona - button disappear on mouse hover
barcelona.addEventListener("mouseleave", function(){
    var button = document.getElementById("barcelona-btn");
    button.style.opacity = 0;
    barcelonaImg.classList.add("img-thumbnail")
});


//Athens - button appear on mouse hover
athensImg.addEventListener("mouseenter", function( event ) {
    var button = document.getElementById("athens-btn")
    athensImg.classList.remove("img-thumbnail")
    button.style.opacity = 1;
    });

//Athens - button disappear on mouse hover
athens.addEventListener("mouseleave", function(){
    var button = document.getElementById("athens-btn");
    button.style.opacity = 0;
    athensImg.classList.add("img-thumbnail")
});

//Lisbon -button appear on mouse hover
lisbonImg.addEventListener("mouseenter", function( event ) {
    var button = document.getElementById("lisbon-btn")
    lisbonImg.classList.remove("img-thumbnail")
    button.style.opacity = 1;
    });

//Lisbon-button disappear on mouse hover
lisbon.addEventListener("mouseleave", function(){
    var button = document.getElementById("lisbon-btn");
    button.style.opacity = 0;
    lisbonImg.classList.add("img-thumbnail")
});





//NY itineraries
nyButton.addEventListener("click", function(){
    const otherItineraries = document.getElementsByClassName("itinerary");
    //Close all open iteneraries
    for(i = 0; i < otherItineraries.length; i++){
        if(otherItineraries[i].style.display == "block"){
            otherItineraries[i].style.display = "none";
        }
    }
    const days = document.getElementById("form").value;
    const weekendPlan = document.getElementById("ny-weekend");
    const weekPlan = document.getElementById("ny-week");
    const twoWeekPlan = document.getElementById("ny-twoweeks");

    //Find the right itinerary and display it
    if(days == "3"){
        weekendPlan.style.display = "block";

    }
    else if(days == "7"){
        weekPlan.style.display = "block";
    }
    else if(days == "14"){
        twoWeekPlan.style.display = "block";
    }
});


//Shanghai itenraries
shanghaiButton.addEventListener("click", function(){
    const otherItineraries = document.getElementsByClassName("itinerary");
    //Close all open iteneraries
    for(i = 0; i < otherItineraries.length; i++){
        if(otherItineraries[i].style.display == "block"){
            otherItineraries[i].style.display = "none";
        }
    }
    const days = document.getElementById("form").value;
    const weekendPlan = document.getElementById("shanghai-weekend");
    const weekPlan = document.getElementById("shanghai-week");
    const twoWeekPlan = document.getElementById("shanghai-twoweeks");

    //Find the right itinerary and display it
    if(days == "3"){
        weekendPlan.style.display = "block";

    }
    else if(days == "7"){
        weekPlan.style.display = "block";
    }
    else if(days == "14"){
        twoWeekPlan.style.display = "block";
    }
});

//Oslo itineraries
osloButton.addEventListener("click", function(){
    const otherItineraries = document.getElementsByClassName("itinerary");
    //Close all open iteneraries
    for(i = 0; i < otherItineraries.length; i++){
        if(otherItineraries[i].style.display == "block"){
            otherItineraries[i].style.display = "none";
        }
    }
    const days = document.getElementById("form").value;
    const weekendPlan = document.getElementById("oslo-weekend");
    const weekPlan = document.getElementById("oslo-week");
    const twoWeekPlan = document.getElementById("oslo-twoweeks");

    //Find the right itinerary and display it
    if(days == "3"){
        weekendPlan.style.display = "block";

    }
    else if(days == "7"){
        weekPlan.style.display = "block";
    }
    else if(days == "14"){
        twoWeekPlan.style.display = "block";
    }
});


//Moscow itenraries
moscowButton.addEventListener("click", function(){
    const otherItineraries = document.getElementsByClassName("itinerary");
    //Close all open iteneraries
    for(i = 0; i < otherItineraries.length; i++){
        if(otherItineraries[i].style.display == "block"){
            otherItineraries[i].style.display = "none";
        }
    }
    const days = document.getElementById("form").value;
    const weekendPlan = document.getElementById("moscow-weekend");
    const weekPlan = document.getElementById("moscow-week");
    const twoWeekPlan = document.getElementById("moscow-twoweeks");

    //Find the right itinerary and display it
    if(days == "3"){
        weekendPlan.style.display = "block";

    }
    else if(days == "7"){
        weekPlan.style.display = "block";
    }
    else if(days == "14"){
        twoWeekPlan.style.display = "block";
    }
})

//Paris itenraries
parisButton.addEventListener("click", function(){
    const otherItineraries = document.getElementsByClassName("itinerary");
    //Close all open iteneraries
    for(i = 0; i < otherItineraries.length; i++){
        if(otherItineraries[i].style.display == "block"){
            otherItineraries[i].style.display = "none";
        }
    }
    const days = document.getElementById("form").value;
    const weekendPlan = document.getElementById("paris-weekend");
    const weekPlan = document.getElementById("paris-week");
    const twoWeekPlan = document.getElementById("paris-twoweeks");

    //Find the right itinerary and display it
    if(days == "3"){
        weekendPlan.style.display = "block";

    }
    else if(days == "7"){
        weekPlan.style.display = "block";
    }
    else if(days == "14"){
        twoWeekPlan.style.display = "block";
    }
});

//Rome itenraries
romeButton.addEventListener("click", function(){
    const otherItineraries = document.getElementsByClassName("itinerary");
    //Close all open iteneraries
    for(i = 0; i < otherItineraries.length; i++){
        if(otherItineraries[i].style.display == "block"){
            otherItineraries[i].style.display = "none";
        }
    }
    const days = document.getElementById("form").value;
    const weekendPlan = document.getElementById("rome-weekend");
    const weekPlan = document.getElementById("rome-week");
    const twoWeekPlan = document.getElementById("rome-twoweeks");

    //Find the right itinerary and display it
    if(days == "3"){
        weekendPlan.style.display = "block";

    }
    else if(days == "7"){
        weekPlan.style.display = "block";
    }
    else if(days == "14"){
        twoWeekPlan.style.display = "block";
    }
});

//Berlin itenraries
berlinButton.addEventListener("click", function(){
    const otherItineraries = document.getElementsByClassName("itinerary");
    //Close all open iteneraries
    for(i = 0; i < otherItineraries.length; i++){
        if(otherItineraries[i].style.display == "block"){
            otherItineraries[i].style.display = "none";
        }
    }
    const days = document.getElementById("form").value;
    const weekendPlan = document.getElementById("berlin-weekend");
    const weekPlan = document.getElementById("berlin-week");
    const twoWeekPlan = document.getElementById("berlin-twoweeks");

    //Find the right itinerary and display it
    if(days == "3"){
        weekendPlan.style.display = "block";

    }
    else if(days == "7"){
        weekPlan.style.display = "block";
    }
    else if(days == "14"){
        twoWeekPlan.style.display = "block";
    }
});


//Barcelona itenraries
barcelonaButton.addEventListener("click", function(){
    const otherItineraries = document.getElementsByClassName("itinerary");
    //Close all open iteneraries
    for(i = 0; i < otherItineraries.length; i++){
        if(otherItineraries[i].style.display == "block"){
            otherItineraries[i].style.display = "none";
        }
    }
    const days = document.getElementById("form").value;
    const weekendPlan = document.getElementById("barcelona-weekend");
    const weekPlan = document.getElementById("barcelona-week");
    const twoWeekPlan = document.getElementById("barcelona-twoweeks");

    //Find the right itinerary and display it
    if(days == "3"){
        weekendPlan.style.display = "block";

    }
    else if(days == "7"){
        weekPlan.style.display = "block";
    }
    else if(days == "14"){
        twoWeekPlan.style.display = "block";
    }
});


//Athens itenraries
athensButton.addEventListener("click", function(){
    const otherItineraries = document.getElementsByClassName("itinerary");
    //Close all open iteneraries
    for(i = 0; i < otherItineraries.length; i++){
        if(otherItineraries[i].style.display == "block"){
            otherItineraries[i].style.display = "none";
        }
    }
    const days = document.getElementById("form").value;
    const weekendPlan = document.getElementById("athens-weekend");
    const weekPlan = document.getElementById("athens-week");
    const twoWeekPlan = document.getElementById("athens-twoweeks");

    //Find the right itinerary and display it
    if(days == "3"){
        weekendPlan.style.display = "block";

    }
    else if(days == "7"){
        weekPlan.style.display = "block";
    }
    else if(days == "14"){
        twoWeekPlan.style.display = "block";
    }
});

//Lisbon itenraries
lisbonButton.addEventListener("click", function(){
    const otherItineraries = document.getElementsByClassName("itinerary");
    //Close all open iteneraries
    for(i = 0; i < otherItineraries.length; i++){
        if(otherItineraries[i].style.display == "block"){
            otherItineraries[i].style.display = "none";
        }
    }
    const days = document.getElementById("form").value;
    const weekendPlan = document.getElementById("lisbon-weekend");
    const weekPlan = document.getElementById("lisbon-week");
    const twoWeekPlan = document.getElementById("lisbon-twoweeks");

    //Find the right itinerary and display it
    if(days == "3"){
        weekendPlan.style.display = "block";

    }
    else if(days == "7"){
        weekPlan.style.display = "block";
    }
    else if(days == "14"){
        twoWeekPlan.style.display = "block";
    }
});