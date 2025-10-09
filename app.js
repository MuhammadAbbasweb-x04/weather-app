
const apiurl = "https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=Lahore";
const apikey = "7b636e27f20645f4b4c90819250910";


axios(apiurl).then(res =>{
console.log(res.data);
console.log("hello");


}).catch(err =>{

console.log(err);




})









