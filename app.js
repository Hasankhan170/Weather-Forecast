
const input = document.querySelector('input');
const form = document.querySelector('form');

const div = document.querySelector('div')

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    axios(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input.value}?key=MPSJFVSK5GBJUECH7TS82XAVL
`)
   .then((res)=>{
    console.log(res.data)
    div.innerHTML += `
    <h1>${res.data.address}</h1>
    <h2>Latitude : ${res.data.latitude}</h2>
    <h2>Longitude : ${res.data.longitude}</h2>
    <h3>Cloudcover : ${res.data.currentConditions.cloudcover}</h3>
    <h3>Conditions : ${res.data.currentConditions.conditions}</h3>
    <h3>Datetime : ${res.data.currentConditions.datetime}</h3>
    <h3>${res.data.currentConditions.icon}</h3>
    `
    })
   .catch((error)=>{
    console.log(error)
    })
})



