// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

var apiKey = "6c7857e83001a13e79c50713cab75637";
var city = localStorage.getItem("cityName");
var baseURL = "https://api.openweathermap.org/data/2.5/";
var currentURL = baseURL + `weather?appid=${apiKey}&units=metric&`;
var forecastURL = baseURL + `forecast?appid=${apiKey}&units=metric&`;
var iconURL = "https://openweathermap.org/img/w/";

("https://api.openweathermap.org/data/2.5/weather?appid=${6c7857e83001a13e79c50713cab75637}&units=metric");

// -- END OF API DEPENDENCIES -- //



function inputSubmitted(cityName) {
  $.get(currentURL + `q=${cityName}`).then(function (currentData) {
    // console.log(currentData);

    $("p").append(`
      <div>Temp: ${Math.round(currentData.main.temp)}</div>
      <div>Humidity: ${currentData.main.humidity}%</div>
      <div>Wind: ${currentData.wind.speed}</div>
      <div>IconURL: ${iconURL + currentData.weather[0].icon}.png</div>
      `);

    $.get(
      forecastURL + `lat=${currentData.coord.lat}&lon=${currentData.coord.lon}`
    ).then(function (forecastData) {
      console.log(forecastData);
      console.log(forecastData.list[0].main.temp);

      $("#forecast1").append(`
      <div>${'('  + moment(new Date()).add(1, 'days').format("DD/MM/YYYY") + ')' }</div>
      <div>Temp: ${Math.round(forecastData.list[1].main.temp)}</div>
      <div>Humidity: ${forecastData.list[1].main.humidity}%</div>
      <div>Wind: ${forecastData.list[1].wind.speed}</div>
      
      `);

      $("#forecast2").append(`
      <div>${'('  + moment(new Date()).add(2, 'days').format("DD/MM/YYYY") + ')' }</div>
      <div>Temp: ${Math.round(forecastData.list[2].main.temp)}</div>
      <div>Humidity: ${forecastData.list[2].main.humidity}%</div>
      <div>Wind: ${forecastData.list[2].wind.speed}</div>
      
      `);

      $("#forecast3").append(`
      <div>${'('  + moment(new Date()).add(3, 'days').format("DD/MM/YYYY") + ')' }</div>
      <div>Temp: ${Math.round(forecastData.list[3].main.temp)}</div>
      <div>Humidity: ${forecastData.list[3].main.humidity}%</div>
      <div>Wind: ${forecastData.list[3].wind.speed}</div>
      
      `);

      $("#forecast4").append(`
      <div>${'('  + moment(new Date()).add(4, 'days').format("DD/MM/YYYY") + ')' }</div>
      <div>Temp: ${Math.round(forecastData.list[4].main.temp)}</div>
      <div>Humidity: ${forecastData.list[4].main.humidity}%</div>
      <div>Wind: ${forecastData.list[4].wind.speed}</div>
      
      `);

      $("#forecast5").append(`
      <div>${'('  + moment(new Date()).add(5, 'days').format("DD/MM/YYYY") + ')' }</div>
      <div>Temp: ${Math.round(forecastData.list[5].main.temp)}</div>
      <div>Humidity: ${forecastData.list[5].main.humidity}%</div>
      <div>Wind: ${forecastData.list[5].wind.speed}</div>
      
      `);

    });
  });

  $("h3").prepend(city + ' ' + '('  + moment(new Date()).format("DD/MM/YYYY") + ')' );
  // $("h3").prepend(city + ' ' + '('  + moment(new Date()).add(1, 'days').format("DD/MM/YYYY") + ')' );

}

inputSubmitted(city);





var todoList = document.getElementById("todoList");
var todoItem = document.createElement("li");



var list1 = document.getElementById("li1");
var list2 = document.getElementById("li2");
var list3 = document.getElementById("li3");
var list4 = document.getElementById("li4");
var list5 = document.getElementById("li5");
var list6 = document.getElementById("li6");



list1.addEventListener("click", function () {
  console.log(list1.innerHTML);
  localStorage.setItem("cityName", list1.innerHTML);
  location. reload()
})

list2.addEventListener("click", function () {
  console.log(list2.innerHTML);
  localStorage.setItem("cityName", list2.innerHTML);
  location. reload()
})

list3.addEventListener("click", function () {
  console.log(list3.innerHTML);
  localStorage.setItem("cityName", list3.innerHTML);
  location. reload()
})

list4.addEventListener("click", function () {
  console.log(list4.innerHTML);
  localStorage.setItem("cityName", list4.innerHTML);
  location. reload()
})

list5.addEventListener("click", function () {
  console.log(list5.innerHTML);
  localStorage.setItem("cityName", list5.innerHTML);
  location. reload()
})

list6.addEventListener("click", function () {
  console.log(list6.innerHTML);
  localStorage.setItem("cityName", list6.innerHTML);
  location. reload()
})






//--- Start of interaction code ---//

var button = document.getElementById("search-button");
button.innerHTML = "Search";
var counter = 0;

// -- End of button variables -- //

input = document.getElementById("search-input");

const firstStorage = localStorage.getItem("input1");
    list1.innerHTML = firstStorage;

    const secondStorage = localStorage.getItem("input2");
    list2.innerHTML = secondStorage;

    const thirdStorage = localStorage.getItem("input3");
    list3.innerHTML = thirdStorage;

    const fourthStorage = localStorage.getItem("input4");
    list4.innerHTML = fourthStorage;

    const fifthStorage = localStorage.getItem("input5");
    list5.innerHTML = fifthStorage;

    const sixthStorage = localStorage.getItem("input6");
    list6.innerHTML = sixthStorage;

button.onclick = function () {
//   event.preventDefault();
  counter++;
  button.innerHTML = "Clicked " + counter + " times";

  if (counter === 1) {
    localStorage.setItem("cityName", input.value);
    if (firstStorage == null){
        localStorage.setItem("input1", input.value);
        
        
    }
   
    else if (secondStorage == null) {
        localStorage.setItem("input2", input.value);
    }
    
    else if (thirdStorage == null) {
        localStorage.setItem("input3", input.value);
    }

    else if (fourthStorage == null) {
        localStorage.setItem("input4", input.value);
    }

    else if (fifthStorage == null) {
        localStorage.setItem("input5", input.value);
    }

    else if (sixthStorage == null) {
        localStorage.setItem("input6", input.value);
    }

    else {
        console.log("hello")
    }

  }};

  // document.getElementById("li1").style.display = "none";
// document.getElementById("li2").style.display = "none";
// document.getElementById("li3").style.display = "none";
// document.getElementById("li4").style.display = "none";
// document.getElementById("li5").style.display = "none";
// document.getElementById("li6").style.display = "none";

// document.getElementById("li1").style.display = "block";
// document.getElementById("li2").style.display = "block";
// document.getElementById("li3").style.display = "block";
// document.getElementById("li4").style.display = "block";
// document.getElementById("li5").style.display = "block";
// document.getElementById("li6").style.display = "block";

  function previousChecker(){
    if (firstStorage == null){
      document.getElementById("li1").style.display = "none";
  }

  else{
    document.getElementById("li1").style.display = "block";
  }

  if (secondStorage == null){
    document.getElementById("li2").style.display = "none";
}

else{
  document.getElementById("li2").style.display = "block";
}

if (thirdStorage == null){
  document.getElementById("li3").style.display = "none";
}

else{
document.getElementById("li3").style.display = "block";
}

if (fourthStorage == null){
  document.getElementById("li4").style.display = "none";
}

else{
document.getElementById("li4").style.display = "block";
}

if (fifthStorage == null){
  document.getElementById("li5").style.display = "none";
}

else{
document.getElementById("li5").style.display = "block";
}

if (sixthStorage == null){
  document.getElementById("li6").style.display = "none";
}

else{
document.getElementById("li6").style.display = "block";
}

  };

  previousChecker();
