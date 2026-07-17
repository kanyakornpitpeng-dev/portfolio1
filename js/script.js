const weather = document.getElementById("weather-container");

// ฝน
function createRain(){

    const rain=document.createElement("img");

    rain.src="images/raindrop.png";

    rain.className="raindrop";

    rain.style.left=Math.random()*window.innerWidth+"px";

    rain.style.width=(15+Math.random()*18)+"px";

    rain.style.animationDuration=(2+Math.random()*2)+"s";

    weather.appendChild(rain);

    rain.addEventListener("animationend",()=>{
        rain.remove();
    });

}

// เมฆ

function createCloud(){

    const cloud=document.createElement("img");

    cloud.src="images/cloud.png";

    cloud.className="cloud";

    cloud.style.top=Math.random()*120+"px";

    cloud.style.left="-250px";

    cloud.style.width=(180+Math.random()*120)+"px";

    cloud.style.animationDuration=(25+Math.random()*20)+"s";

    weather.appendChild(cloud);

}

// สายฟ้า

function lightning() {

    const bolt = document.createElement("img");

    bolt.src = "images/lightning.png";

    bolt.style.position = "fixed";
    bolt.style.top = Math.random() * 150 + "px";
    bolt.style.left = Math.random() * (window.innerWidth - 150) + "px";
    bolt.style.width = "120px";
    bolt.style.zIndex = "10000";
    bolt.style.pointerEvents = "none";

    weather.appendChild(bolt);

    document.body.style.transition = "background 0.1s";
    document.body.style.background = "#ffffff";

    setTimeout(() => {
        document.body.style.background = "";
        bolt.remove();
    }, 180);
}

setInterval(lightning, 5000);
