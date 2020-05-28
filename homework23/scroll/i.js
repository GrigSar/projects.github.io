let lastScrollTop = 0;
window.addEventListener("scroll", function () {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        document.getElementById("nav").classList.add('hide');
    } else {
        document.getElementById("nav").classList.remove('hide');
    }
    lastScrollTop = st;
}, false);