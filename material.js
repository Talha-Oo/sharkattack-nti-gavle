let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll down
        document.querySelector("header").classList.add("hide");
    } else {
        // Scroll up
        document.querySelector("header").classList.remove("hide");
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);
