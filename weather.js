let day=document.querySelector("#Date")
let fullDate = new Date();
let weekDays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

day.innerHTML=`${weekDays[fullDate.getDay()]} ${fullDate.getHours()}:${fullDate.getMinutes()}`;
// console.log(day)



let city=document.querySelector("#city");
console.log(city)

let submit=document.querySelector("form")
submit.addEventListener("submit",function(event){
  event.preventDefault();
  let inputCity = document.querySelector("#enter-city").value;

  let input = inputCity.charAt(0).toUpperCase() + inputCity.slice(1);
  city.innerHTML = input;
  console.log(input);

  let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=2bd326a60dc89a53287e446e819664df&units=metric`;

  function showTemp(response) {
    let temp = Math.round(response.data.main.temp);
    console.log(response.data.main.temp);
    document.getElementById("Tempreture").innerHTML = temp;
  }
  axios.get(urlApi).then(showTemp);
}
)

document.getElementById("current").addEventListener("click", function () {
  function currentTime(position) {
    console.log(position.coords);
    let latitude = position.coords.latitude;
    console.log(latitude);
    let longitude = position.coords.longitude;
    console.log(longitude);
    let urlApi = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=2bd326a60dc89a53287e446e819664df&units=metric`;

axios.get(urlApi).then(showCurrent);

    function showCurrent(response) {
   let currentCity=response.data.name;
   let currentTemp = Math.round(response.data.main.temp);
   document.getElementById("Tempreture").innerHTML = currentTemp;
   document.getElementById("city").innerHTML = currentCity;
    }
    
  }

  navigator.geolocation.getCurrentPosition(currentTime);
});








let temp = document.querySelector("#Tempreture");
let centigrade = document.querySelector("#centigrade");
let farenheit = document.querySelector("#farenheit");
centigrade.addEventListener("click",function(event){
    event.preventDefault();
    temp.innerHTML="4"
})
farenheit.addEventListener("click", function (event) {
  event.preventDefault();
  temp.innerHTML = "66 ";
});



