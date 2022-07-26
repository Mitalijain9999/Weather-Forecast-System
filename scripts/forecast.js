const key='xN91KBb6pjG6Gs3DaVq9A6fm6r02yedn';
//created from accuweather apis from google
//you can only create one api using one account from accuweather api
//this key is also generated from accu weather site
//acc used mitali.jain135@gmail.com
//[pass Mitali248@]

const getWeather=async (id)=>{
    const base='http://dataservice.accuweather.com/currentconditions/v1/';
    const query=`${id}?apikey=${key}`;
    const response=await fetch(base + query);
    const data=await response.json();
    console.log(data[0]);
    return data[0];


}
getWeather();


const getCity= async (city) => {
    const base='http://dataservice.accuweather.com/locations/v1/cities/search';
    const query=`?apikey=${key}&q=${city}`;
    const response=await fetch(base + query);
    const data=await response.json();

    console.log(data[0]);
    return(data[0]);

}
// getCity('delhi')
// .then(data=> {
//     return getWeather(data.Key);
// }).then(data=>{
//     console.log(data);
// }).catch(err=>console.log('1',err));


