const apiKey="fa3fe511e46c29360503931e02ea4c3d ";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

async function checkWeather(city){
    const response=await fetch(apiUrl +city +`&appid=${apiKey}`);
    var data=await response.json();
   
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"℃";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
    document.querySelector(".weather").style.display="block";
    document.querySelector(".humidity").style.display="block";
    document.querySelector(".wind").style.display="block";
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
