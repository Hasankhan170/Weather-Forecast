
const input = document.querySelector('input');
const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    axios(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input.value}?key=MPSJFVSK5GBJUECH7TS82XAVL
`)
   .then((res)=>{
    console.log(res.data)
    })
   .catch((error)=>{
    console.log(error)
    })
})



