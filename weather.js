let day=document.querySelector("#Date")
let fullDate = new Date();
let weekDays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let Months=['January','February','March','April','May','June','July','August','September','October','November','December']
day.innerHTML=`${weekDays[fullDate.getDay()]} ${fullDate.getHours()}:${fullDate.getMinutes()}`;
let city=document.querySelector("#city");
let celsius=null;

let submit=document.querySelector("form")
submit.addEventListener("submit",function(event){
  event.preventDefault();
  let inputCity = document.querySelector("#enter-city").value;
  let input = inputCity.charAt(0).toUpperCase() + inputCity.slice(1);
  city.innerHTML = input;
  console.log(input);
  let ApiKey='0506104e13040eaeft9c86aob5b3434e';
  let urlApi=`https://api.shecodes.io/weather/v1/current?query=${input}&key=${ApiKey}&units=metric`;
  // let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=2bd326a60dc89a53287e446e819664df&units=metric`;
 

 //weather info 
let humidity=document.querySelector("#humidity");
let wind=document.querySelector("#wind");
let dateInformation=document.querySelector("#dateInfo");
  
function showTemp(response) {
let humidy=Math.round(response.data.temperature.humidity);
let windy=Math.round(response.data.wind.speed);
humidity.innerHTML=`Humidity: ${humidy}%`;
wind.innerHTML=`Wind: ${windy} Km/H`;
  let temp = Math.round(response.data.temperature.current);
  console.log(response.data.temperature.current);
  const today=new Date();
  let month=Months[today.getMonth()];
  dateInformation.innerHTML=`${month} ${today.getDate()}-${today.getFullYear()}`;
  document.getElementById("Tempreture").innerHTML = temp;
    celsius=response.data.temperature.current;
    console.log(response.data);
    //change icon
let currentIcon=document.querySelector("#currentIcon");
let currentID=response.data.condition.icon;
let iconID=`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${currentID}.png`;
console.log(iconID);
currentIcon.setAttribute('src',`images/${currentID}.png`);

  }
  axios.get(urlApi).then(showTemp);

}
)


//celsius & fahrenheit

let Fahrenheit=document.querySelector("#fahrenheit");
let Celsius=document.querySelector("#celsius");
let Tempreture=document.querySelector("#Tempreture");

function displayFahrenheit(event){
  event.preventDefault();
  let useformula=Math.round((celsius * 9/5) + 32);
console.log(useformula);
Tempreture.innerHTML=useformula;

  Fahrenheit.setAttribute("class","degree active");
  Celsius.classList.remove("active");
}

function displayCelsius(event){
  event.preventDefault();
  Tempreture.innerHTML=Math.round(celsius);
  Fahrenheit.classList.remove("active");
  Celsius.classList.add("active");
}


Fahrenheit.addEventListener("click",displayFahrenheit);
Celsius.addEventListener("click",displayCelsius);

//geographical info
document.getElementById("current").addEventListener("click", function () {
  function currentTime(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let ApiKey='0506104e13040eaeft9c86aob5b3434e';
let urlApi=`https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${ApiKey}`;
axios.get(urlApi).then(showCurrent);
function showCurrent(response) {
let currentTemp = Math.round(response.data.temperature.current);
let currentCity=response.data.city
document.getElementById("Tempreture").innerHTML = currentTemp;
document.getElementById("city").innerHTML = currentCity;
}
}
navigator.geolocation.getCurrentPosition(currentTime);
});
















