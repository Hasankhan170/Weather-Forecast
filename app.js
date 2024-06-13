axios('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=MPSJFVSK5GBJUECH7TS82XAVL')
.then((res)=>{
    console.log(res.data)
}).catch((error)=>{
    
})