const submit_btn=document.getElementById('submit_btn');
const city_name=document.getElementById('city_name');
const search_city=document.getElementById('search_city');
const temp=document.getElementById('temp');
const status=document.getElementById('status');
const data_hide=document.getElementById("tempdiv");
//time setting----------------------------------------------------------------
const time=document.getElementById('time');
var d=new Date();
let arr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var mint=d.getMinutes();
if(mint<10)
{
  mint="0"+mint;
}
var hour=d.getHours();
var set
if(hour>12)
{set="PM";}
else
{
  set="AM";
}
if(hour>12)
{
  hour=hour%12;
}
time.innerHTML=`<h5>${arr[d.getDay()]} ${hour}:${mint} ${set}</h5>`;
//time setting-----------------------------------------------------------------

//weather status---------------------------------------------------------------
const getinfo = async function(event)
{ event.preventDefault();
   var val=search_city.value;           
    if(val==="")
    {
  city_name.innerHTML="<h3>Please Write Name to Search..</h3>";
  data_hide.style.display="none";    
 }
  else
  {
      try
      {
    let url=`http://api.openweathermap.org/data/2.5/weather?q=${val}&units=metric&appid=99ecf1117ff7506e0e002c311fc3e7a4`;
    const response=await fetch(url);
    const data = await response.json();
    const arrdata=[data];
 //--------------------------------------------
 city_name.innerHTML=`<h5>${arrdata[0].name},${arrdata[0].sys.country}</h5>`;
 temp.innerHTML=`${arrdata[0].main.temp} &#8451 `;
    const st= arrdata[0].weather[0].main;   
 if(st=="Cloud")
 { status.innerHTML = '<h4><i class="fas fa-cloud fa-4x"></i></h4>';}
 else if(st=="Clear")
 {status.innerHTML='<h4><i class="fas fa-sun fa-3x"></i></h4>';}
 else if(st=="Rain")
 {status.innerHTML='<h4><i class="fas fa-cloud-rain fa-4x"></i></h4>';}
 else 
 {status.innerHTML='<h4><i class="fas fa-sun fa-3x"></i></h4>';}
    
  //set  weather icons----------------------------------------
    data_hide.style.display="block";
      }
       
    catch
      {
        city_name.innerHTML=`<h3>You Write Invalid City Name</h3>`;
        data_hide.style.display="none"; 
      }
  }
  
}
submit_btn.addEventListener('click',getinfo);
function fun()
{
  location.href="/weather";
}