// Get all elements with class "box"
const boxes = document.querySelectorAll(".box");

// Loop through each box and add event listeners
boxes.forEach(box => {
    box.addEventListener("mouseover", () => {
        box.style.borderColor = "#0357d4";
        box.style.boxShadow = "0 0 15px #0357d41a"; 
    });

    box.addEventListener("mouseout", () => {
        box.style.borderColor = "#ededed";
        box.style.boxShadow = "none";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    gsap.to(".code", { 
        duration: 1, 
        x: 60, 
        opacity: 1, 
        ease: "power2.out",
        delay: 0.3
    });
});

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".box").forEach(box => {
        gsap.to(box, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: box,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".help").forEach(box => {
        gsap.to(box, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: box,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });
});




