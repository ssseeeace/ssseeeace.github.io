document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetID = this.getAttribute("href");
            const targetElement = document.querySelector(targetID);

            if (targetElement) {
                event.preventDefault();
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset; // Update this line
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 800;
                let start = null;

                window.requestAnimationFrame(step);

                function step(timestamp) {
                    if (!start) start = timestamp;
                    const progress = timestamp - start;
                    window.scrollTo(
                        0,
                        easeInOutCubic(progress, startPosition, distance, duration)
                    );
                    if (progress < duration) window.requestAnimationFrame(step);
                }
            }
        });
    });


    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t * t + b;
        t -= 2;
        return (c / 2) * (t * t * t + 2) + b;
    }
});
// Get the header element and home section
const header = document.querySelector("header");
const homeSection = document.querySelector("#home");

// Function to update the header's class based on the scroll position
function updateHeaderOnScroll() {
    if (window.scrollY <= homeSection.offsetHeight - 100) {
        header.classList.add("thick-navbar");
        header.style.height = "1000px"; // Add this line
    } else {
        header.classList.remove("thick-navbar");
        header.style.height = "60px"; // Add this line
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const flipContainers = document.querySelectorAll(".flip-container");

    flipContainers.forEach(function (flipContainer) {
        flipContainer.addEventListener("click", function () {
            this.classList.toggle("hover");
        });
    });
});
// ... Existing JavaScript ...

function animateWelcomeText() {
    const welcomeText = document.querySelector("#home .animate-text");
    setTimeout(() => {
        welcomeText.classList.add("visible");
    }, 100);
}

// Call the function when the page loads
window.addEventListener("load", animateWelcomeText);

  // ... Rest of JavaScript ...



