
const apiurl = "http://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=Karachi";
const apikey = "http://api.weatherapi.com/v1/current.json?key=abcd1234xyz5678&q=Karachi";


axios(apiurl).then(res =>{
console.log(res.data);


}).catch(err =>{

console.log(err);




})









