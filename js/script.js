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
      Temp: ${Math.round(currentData.main.temp)}
      Humidity: ${currentData.main.humidity}%
      Wind: ${currentData.wind.speed}
      IconURL: ${iconURL + currentData.weather[0].icon}.png
      `);

    $.get(
      forecastURL + `lat=${currentData.coord.lat}&lon=${currentData.coord.lon}`
    ).then(function (forecastData) {
      console.log(forecastData);
    });
  });

  $("p").prepend(city);

}

inputSubmitted(city);

//--- End of API JS ---//

// var todoList = document.createElement("div");
// todoList.innerHTML =
//   '<input type="text" id="todoInput" placeholder="Add todo item..."><button id="addTodo">Add</button><ul id="todoList"></ul>';
// document.body.appendChild(todoList);
// var todoInput = document.getElementById("todoInput");
// var addTodo = document.getElementById("addTodo");

var todoList = document.getElementById("todoList");
var todoItem = document.createElement("li");

var list1 = document.getElementById("li1");
var list2 = document.getElementById("li2");
var list3 = document.getElementById("li3");
var list4 = document.getElementById("li4");
var list5 = document.getElementById("li5");
var list6 = document.getElementById("li6");

// addTodo.addEventListener("click", function () {
//   var todoItem = document.createElement("li");
//   todoItem.innerHTML = todoInput.value;
//   todoList.appendChild(todoItem);
//   todoInput.value = "";
// });

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

  }

// I made all of this convuluded code for nothing :'( accidentally found a simpler solution above ^^^^

//   if (counter === 2) {
//     localStorage.setItem("cityName", input.value);
//     if (secondStorage == null){
//         localStorage.setItem("input2", input.value);
//     }
    
//   }

//   if (counter === 3) {
//     localStorage.setItem("cityName", input.value);
//     if (thirdStorage == null){
//         localStorage.setItem("input3", input.value);
//     }
    
//   }

//   if (counter === 4) {
//     localStorage.setItem("cityName", input.value);
//     if (fourthStorage == null){
//         localStorage.setItem("input4", input.value);
//     }
    
//   }

//   if (counter === 5) {
//     localStorage.setItem("cityName", input.value);
//     if (fifthStorage == null){
//         localStorage.setItem("input5", input.value);
//     }
    
//   }

//   if (counter === 6) {
//     localStorage.setItem("cityName", input.value);
//     if (sixthStorage == null){
//         localStorage.setItem("input6", input.value);
//     }
    
//   }
};


// var searchButton = document.getElementById("search-button");
// var input = document.getElementById("search-input");

// searchButton.onclick = function(){

//     event.preventDefault();
//     var key = input.value;
//     localStorage.setItem("input1", key);
//     var value1 = localStorage.getItem(key);

// };
// $("#cityName").append(city)
// var write = localStorage.getItem("input1");

// searchButton.onclick = function(){
//     event.preventDefault();
//     var key2 = input.value;
//     localStorage.setItem("input2", key);
//     var value2 = localStorage.getItem(key);

// };

// $("#cityName2").append(city2)

// function inputSubmitted(cityName) {
//     $.get(currentURL + `q=${cityName}`).then(function (currentData) {
//       console.log(currentData);
//       console.log(currentData.main.temp);
//       var temp = currentData.main.temp;
//       $("p").append(temp);
//     });
//   }
