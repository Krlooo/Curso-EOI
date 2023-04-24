const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const screenMain = document.getElementById('screenMain');
const weatherScreen = document.getElementById('weatherScreen');
const p_temp = document.getElementById('p_temp');
const img_temp = document.getElementById('img_temp');
const p_location = document.getElementById('p_location');

searchBtn.addEventListener('click', () => {
    let inputValue = searchInput.value;
    if (inputValue.length > 1) {
        console.log(searchInput.value);
        getWeather(searchInput.value);
        screenMain.className += " h-96";
        weatherScreen.classList.toggle('hidden');
    }

});

async function getWeather(location = "Madrid") {
    const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=" + location;
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': 'd2a33ca9bemshf523f8d871eba66p134d8fjsn1ce7d8127c9f',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        const resultData = JSON.parse(result);

        const locationName = resultData.location.name;
        const condition = resultData.current.condition.text;
        const wind_mph = resultData.current.wind_mph;
        const feelslike_c = resultData.current.feelslike_c;
        const icon = resultData.current.condition.icon
        const temp = resultData.current.temp_c
        console.log(result);
        p_location.innerText = locationName;
        p_temp.innerText = temp
        img_temp.src = icon;
    } catch (error) {
        console.error(error);
    }
};



function printOnscreen() {

}