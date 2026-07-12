// =====================================
// Portfolio JavaScript
// =====================================

// ====== ใบไม้ปลิว ======

const leafContainer = document.getElementById("leaf-container");

// ชื่อไฟล์รูปใบไม้ (ต้องอยู่ในโฟลเดอร์ images)
const leafImages = [
    "images/leaf.jpg"
];

function createLeaf() {

    const leaf = document.createElement("img");

    // สุ่มรูปใบไม้
    leaf.src = leafImages[Math.floor(Math.random() * leafImages.length)];

    leaf.classList.add("leaf");

    // ตำแหน่งเริ่มต้น
    leaf.style.left = Math.random() * window.innerWidth + "px";

    // ขนาดสุ่ม
    const size = 20 + Math.random() * 35;
    leaf.style.width = size + "px";

    // ความเร็วสุ่ม
    leaf.style.animationDuration = (8 + Math.random() * 6) + "s";

    // ความโปร่งใส
    leaf.style.opacity = 0.5 + Math.random() * 0.5;

    // หมุนเริ่มต้น
    leaf.style.transform = `rotate(${Math.random() * 360}deg)`;

    leafContainer.appendChild(leaf);

    // ลบเมื่อปลิวเสร็จ
    setTimeout(() => {
        leaf.remove();
    }, 15000);

}

// สร้างใบไม้ทุก 400 มิลลิวินาที
setInterval(createLeaf, 400);

// ====== Animation Card ======

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.8s";

    observer.observe(card);

});

// ====== Smooth Scroll ======

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});
