
// let  url = "https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=Lahore";
// let apikey = "";
let container = document.querySelector(".container");

let  cite = document.querySelector("#cite");
let form = document.querySelector("form");

form.addEventListener("submit",  (event)=>{
    event.preventDefault();
axios(`https://api.weatherapi.com/v1/current.json?key=7b636e27f20645f4b4c90819250910=${cite.value}`).then(res =>{
    console.log(res.data);
container.innerHTML = `  <div class="purple-weather-card">
    <div class="city">Lahore, Pakistan</div>
    <div class="temp">28°C</div>
    <div class="condition">
      <img src="https://cdn.weatherapi.com/weather/64x64/day/113.png" alt="Sunny" />
      <span>Sunny</span>
    </div>
  </div>`




}).catch(err =>{

console.log(err);
})
})






