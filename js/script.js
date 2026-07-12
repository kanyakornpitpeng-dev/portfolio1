// ================================
// สร้างใบไม้ปลิว
// ================================

const leafContainer = document.getElementById("leaf-container");

function createLeaf() {

    const leaf = document.createElement("img");

    leaf.src = "images/leaf.jpg";

    leaf.classList.add("leaf");

    leaf.style.left = Math.random() * window.innerWidth + "px";

    leaf.style.width = (20 + Math.random() * 30) + "px";

    leaf.style.animationDuration = (8 + Math.random() * 7) + "s";

    leaf.style.opacity = Math.random();

    leaf.style.transform =
        `rotate(${Math.random() * 360}deg)`;

    leafContainer.appendChild(leaf);

    setTimeout(() => {
        leaf.remove();
    },15000);

}

setInterval(createLeaf,500);

// ================================
// Card Animation
// ================================

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
