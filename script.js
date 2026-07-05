console.log("Cafe Shop Website Loaded Successfully!");
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", function () {
    if (window.scrollY>200){
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});
topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});