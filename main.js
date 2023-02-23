const mainItems = document.querySelectorAll(".navbar-item"),
    backDiv = document.getElementById("app__navbar-item-background"),
    mainNav = document.querySelector(".app__navbar");

mainItems.forEach(item => item.addEventListener("mouseenter", function(e) {
    left = e.target.offsetLeft;
    width = e.target.offsetWidth;

    backDiv.style.left = left+'px';
    backDiv.style.width = width+'px';
})
);

mainNav.addEventListener("mouseleave", function() {
    backDiv.style.background = "transparent";
});
mainNav.addEventListener("mouseenter", function() {
    backDiv.style.background = "rgba(204, 204, 204, 0.3)";
});