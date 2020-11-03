const read = document.getElementById("read");
const plan = document.getElementById("plan");


//Redirect user to stories page on button click
read.addEventListener("click", function(){
    location.href = "/stories.html";
});

//Redirect user to planning page on button click
plan.addEventListener("click", function(){
  location.href = "/plan.html";
});