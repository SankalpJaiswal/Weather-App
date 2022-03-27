async function getWeather(){

    try{
        let city = document.getElementById("city").value;

        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=06a8453648ca9bba97e4998a30ca27bb&units=metric`);

        let res1 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&APPID=06a8453648ca9bba97e4998a30ca27bb&units=metric`)
    
        let data = await res.json();

        let data1 = await res1.json()

        console.log('data:', data);
        console.log('data1:', data1)

        appendData(data);

        append(data1);

    }

    catch(err){
        console.log('err:', err)
    }
    
}

function appendData(data){

    document.querySelector("#container").innerHTML="";

    let left = document.createElement("div");
    left.setAttribute("id","left");

    let right = document.createElement("div");
    right.setAttribute("id","right");

    let name = document.createElement("h3");
    name.innerText = `City Name - ${data.name}`;

    let temp = document.createElement("h4");
    temp.innerText = `Temperature - ${data.main.temp} *C`;

    let pressure = document.createElement("h5");
    pressure.innerText = `Pressure - ${data.main.pressure}`;

    let humidity = document.createElement("h5");
    humidity.innerText = `Humidity - ${data.main.humidity}`;

    let tempmax = document.createElement("h5");
    tempmax.innerText = `Max. Temperature - ${data.main.temp_max} *C`;

    let tempmin = document.createElement("h5");
    tempmin.innerText = `Min. Temperature - ${data.main.temp_min} *C`;

    // <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org">123movies</a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net">google maps embedded</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div>

    let iframe = document.createElement("iframe");
    iframe.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    iframe.height = "300px";
    iframe.width = "500px";


    left.append(name,temp,pressure,humidity,tempmax,tempmin);

    right.append(iframe)

    document.querySelector("#container").append(left,right);
}

function append(data){

    document.querySelector("#bottom").innerHTML="";
    
    let div = document.createElement("div");
    let temp = document.createElement("h3");
    temp.innerText = "Temperature"
    let mintemp = document.createElement("h3")
    mintemp.innerText = "Min. Teperature";
    let maxtemp = document.createElement("h3")
    maxtemp.innerText = "Max. Temperature";
    div.append(temp,mintemp,maxtemp)


    let div1 = document.createElement("div");
    let temp1 = document.createElement("h4");
    temp1.innerText = data.list[0].main.temp;
    let mintemp1 = document.createElement("h5")
    mintemp1.innerText = data.list[0].main.temp_min;
    let maxtemp1 = document.createElement("h5")
    maxtemp1.innerText = data.list[0].main.temp_max;
    div1.append(temp1,mintemp1,maxtemp1)

    let div2 = document.createElement("div");
    let temp2 = document.createElement("h4");
    temp2.innerText = data.list[1].main.temp;
    let mintemp2 = document.createElement("h5")
    mintemp2.innerText = data.list[1].main.temp_min;
    let maxtemp2 = document.createElement("h5")
    maxtemp2.innerText = data.list[1].main.temp_max;
    div2.append(temp2,mintemp2,maxtemp2);

    let div3 = document.createElement("div");
    let temp3 = document.createElement("h4");
    temp3.innerText = data.list[2].main.temp;
    let mintemp3 = document.createElement("h5")
    mintemp3.innerText = data.list[2].main.temp_min;
    let maxtemp3 = document.createElement("h5")
    maxtemp3.innerText = data.list[2].main.temp_max;
    div3.append(temp3,mintemp3,maxtemp3);

    let div4 = document.createElement("div");
    let temp4 = document.createElement("h4");
    temp4.innerText = data.list[3].main.temp;
    let mintemp4 = document.createElement("h5")
    mintemp4.innerText = data.list[3].main.temp_min;
    let maxtemp4 = document.createElement("h5")
    maxtemp4.innerText = data.list[3].main.temp_max;
    div4.append(temp4,mintemp4,maxtemp4);

    let div5 = document.createElement("div");
    let temp5 = document.createElement("h4");
    temp5.innerText = data.list[4].main.temp;
    let mintemp5 = document.createElement("h5")
    mintemp5.innerText = data.list[4].main.temp_min;
    let maxtemp5 = document.createElement("h5")
    maxtemp5.innerText = data.list[4].main.temp_max;
    div5.append(temp5,mintemp5,maxtemp5)
                   
    let div6 = document.createElement("div");
    let temp6 = document.createElement("h4");
    temp6.innerText = data.list[5].main.temp;
    let mintemp6 = document.createElement("h5")
    mintemp6.innerText = data.list[5].main.temp_min;
    let maxtemp6 = document.createElement("h5")
    maxtemp6.innerText = data.list[5].main.temp_max;
    div6.append(temp6,mintemp6,maxtemp6)

    let div7 = document.createElement("div");
    let temp7 = document.createElement("h4");
    temp7.innerText = data.list[6].main.temp;
    let mintemp7 = document.createElement("h5")
    mintemp7.innerText = data.list[6].main.temp_min;
    let maxtemp7 = document.createElement("h5")
    maxtemp7.innerText = data.list[6].main.temp_max;
    div7.append(temp7,mintemp7,maxtemp7)

    document.querySelector("#bottom").append(div,div1,div2,div3,div4,div5,div6,div7);
    

    

}