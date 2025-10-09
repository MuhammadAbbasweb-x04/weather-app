
let container = document.querySelector(".container");

let  input = document.querySelector("#city");
let form = document.querySelector(".input-group");

form.addEventListener("submit",  (event)=>{
    event.preventDefault();
axios(
    `https://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=${city.value}&aqi=no`
  ).then((res) =>{
    console.log(res.data);
container.innerHTML += `<div class="purple-weather-card">
            <h1>${res.data.location.name}</h1>
    <div class="city">${res.data.location.localtime} ,${res.data.location.country}</div>
    <div class="temp">${res.data.current.temp_c}</div>
    <div class="condition">
      <img src=${res.data.current.condition.icon} alt="" />
      <span>${res.data.current.condition.text}</span>
    </div>
  </div>`
}).catch((err) =>{

console.log(  "errr" + err);
})
})






