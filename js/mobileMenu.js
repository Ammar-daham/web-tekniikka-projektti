
//finding mobile-menu ja mobile-container classes
const menuBody = document.querySelector(".mobile_container");
//add event listener type click to show the mobile container
const menu = document.querySelector(".mobile-menu").addEventListener("click", () => {
    //using conditional statement to check the display
    if (menuBody.style.display === "block") {
        menuBody.style.display = "none";
    } else {
        menuBody.style.display = "block";
    }
});




