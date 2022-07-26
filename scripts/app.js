const cityForm=document.querySelector('form');
const card=document.querySelector('.card');
const details=document.querySelector('.details');
const time=document.querySelector('img.time');
const icon=document.querySelector('.icon img');


const updateUI=(data)=>{


    const cityDets=data.cityDets;
    const weather=data.weather;

    // we can also write like
    // const {cityDets,weather}=data; this means same

    //details updation
    details.innerHTML=`
    <h5 class="my-3">${cityDets.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">

                <span style="font-size: 4em;">${weather.Temperature.Metric.Value}</span>
                <span  style="font-size: 4em;">&deg;</span>
            </div>
        </div>
    `;

    //update night/date icon
    const iconSrc=`img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src',iconSrc);


    //update day/night image
    let timeSrc=null;
    if(weather.IsDayTime){
        timeSrc='img/day.svg';
    }
    else{
        timeSrc='img/night.svg';
    }
    time.setAttribute('src',timeSrc);

    //remove d-none class
    if(card.classList.contains('hidden')){
        card.classList.remove('hidden');
    }

};

const updateCity=async (city)=>{

const cityDets=await getCity(city);
const weather=await getWeather(cityDets.Key);

//returning in the form of object
return{
    cityDets: cityDets,
    weather: weather

    //or we can write like citydets,
    //                      weather
    //when same propery name and value
};

// const cityUpdate=document.querySelector('h5');
// let html=`${city}`;
// cityUpdate.innerHTML=html;

};


cityForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    //get cty value
    const city=cityForm.city.value.trim();

    //reset the form clear all the values
    cityForm.reset();

    //update ui with new cities
    updateCity(city).then(data=>{
        updateUI(data);
    }).catch(err=>{console.log('2',err)});

    //set local storage

    localStorage.setItem('city',city);
});

if(localStorage.getItem('city')){
    updateCity(localStorage.getItem('city'))
    .then(data=>updateUI(data))
    .catch(err=>console.log(err));
}