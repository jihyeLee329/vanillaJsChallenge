const API_KEY = "6ff7ed54a17e5fb61040d63127c63079";
//좌표 가져오기 성공
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        const weather= document.querySelector('#weather span:first-child');
        const city= document.querySelector('#weather span:last-child');
        city.innerText  = data.name;
        weather.innerText =  `${data.weather[0].main} / ${data.main.temp}`;
    });
    //fetch = promise > promise는 당장 실행하지 않고 시간이 좀 걸린 뒤에 일어난다. 
    // 서버에 뭔가 물어봤는데 서버 응답하는데 5분 걸린다 치면, 서버 응답을 기다려야함.
    //그래서 then을 사용해야 됌. then(response (응답)을 받을건데, response를 json으로 받겠다 )
}


//좌표 가져오기 실패
function onGeoError(){
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);