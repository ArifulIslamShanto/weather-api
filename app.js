const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;

const searchCity = () =>{
    const city = document.getElementById('city-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayWeather(data))
}

const setInnerText = (id, text) =>{
    document.getElementById(id).innerText = text;
}


const displayWeather = temparature =>{
    console.log(temparature)
    setInnerText('city', temparature.name);
    setInnerText('temp' ,temparature.main.temp);
    setInnerText('sky', temparature.weather[0].main);

    const url =`http://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`;

    const imgIcon = document.getElementById('icon');
    imgIcon.setAttribute('src', url); 

}