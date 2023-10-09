document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetID = this.getAttribute("href");
            const targetElement = document.querySelector(targetID);

            if (targetElement) {
                event.preventDefault();
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
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

    const flipContainers = document.querySelectorAll(".flip-container");
    flipContainers.forEach(function (flipContainer) {
        flipContainer.addEventListener("click", function () {
            this.classList.toggle("hover");
        });
    });

    const darkModeToggle = document.getElementById("dark-mode-toggle");
    let darkModeEnabled = false;

    darkModeToggle.addEventListener("click", function () {
        if (darkModeEnabled) {
            document.body.classList.remove("dark-mode");
        } else {
            document.body.classList.add("dark-mode");
        }
        darkModeEnabled = !darkModeEnabled;
    });

    const htmlElement = document.documentElement;
    darkModeToggle.addEventListener('click', () => {
        htmlElement.classList.toggle('dark-mode');
        if (htmlElement.classList.contains('dark-mode')) {
            darkModeToggle.classList.add('light-to-dark');
            darkModeToggle.classList.remove('dark-to-light');
        } else {
            darkModeToggle.classList.add('dark-to-light');
            darkModeToggle.classList.remove('light-to-dark');
        }
    });

    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t * t + b;
        t -= 2;
        return (c / 2) * (t * t * t + 2) + b;
    }

});




function animateWelcomeText() {
    const welcomeText = document.querySelector("#home .animate-text");
    setTimeout(() => {
        welcomeText.classList.add("visible");
    }, 100);
}


// Call the function when the page loads
window.addEventListener("load", animateWelcomeText);



document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    let darkModeEnabled = false;

    darkModeToggle.addEventListener("click", function () {
        console.log("Dark Mode Toggle Clicked"); // Add this line
        if (darkModeEnabled) {
            document.body.classList.remove("dark-mode");
        } else {
            document.body.classList.add("dark-mode");
        }
        darkModeEnabled = !darkModeEnabled;
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    let darkModeEnabled = false;

    darkModeToggle.addEventListener("click", function () {
        if (darkModeEnabled) {
            document.body.classList.remove("dark-mode");
        } else {
            document.body.classList.add("dark-mode");
        }
        darkModeEnabled = !darkModeEnabled;
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    let darkModeEnabled = false;

    darkModeToggle.addEventListener("click", function () {
        if (darkModeEnabled) {
            document.body.classList.remove("dark-mode");
        } else {
            document.body.classList.add("dark-mode");
        }
        darkModeEnabled = !darkModeEnabled;
    });
}); const darkModeToggle = document.getElementById('dark-mode-toggle');
const htmlElement = document.documentElement;

darkModeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('dark-mode');

    if (htmlElement.classList.contains('dark-mode')) {
        darkModeToggle.classList.add('light-to-dark');
        darkModeToggle.classList.remove('dark-to-light');
    } else {
        darkModeToggle.classList.add('dark-to-light');
        darkModeToggle.classList.remove('light-to-dark');
    }
});


