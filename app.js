
const input = document.querySelector('input');
const form = document.querySelector('form');

const div = document.querySelector('.form-cards')

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    axios(`http://api.weatherapi.com/v1/current.json?key=b90421cd7596432bbb2144327241406&q=${input.value}&aqi=no`)
   .then((res)=>{
    div.innerHTML = ''
    console.log(res.data)
    div.innerHTML += `
        <div class="card text-center" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${res.data.location.name}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">${res.data.location.localtime} , ${res.data.location.country}</h6>
              <img width="160px" src=${res.data.current.condition.icon} alt='weatherImg' />
              <h3 class="card-title">${res.data.current.temp_c} C</h3>
            </div>
          </div>
    `
    })
   .catch((error)=>{
    console.log(error)
    })
})



