// =====================================
// Portfolio JavaScript
// =====================================

// ====== เอฟเฟกต์ลอย ======

const weatherContainer = document.getElementById("leaf-container");

// ใส่รูปที่ต้องการ
const images = [
    "images/lightning.png",
    "images/cloud.png"
];

function createItem() {

    const item = document.createElement("img");

    item.src = images[Math.floor(Math.random() * images.length)];

    item.classList.add("leaf");

    item.style.left = Math.random() * window.innerWidth + "px";

    item.style.top = "-80px";

    item.style.width = (40 + Math.random() * 40) + "px";

    item.style.animationDuration = (8 + Math.random() * 6) + "s";

    item.style.opacity = 0.8;

    weatherContainer.appendChild(item);

    setTimeout(() => {
        item.remove();
    },15000);

}

setInterval(createItem,700);


// ====== Card Animation ======

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

cards.forEach(card=>{

    observer.observe(card);

});


// ====== Smooth Scroll ======

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});
