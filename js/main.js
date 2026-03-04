document.addEventListener("DOMContentLoaded", function() {
    console.log("HTML document has been loaded. Yeah!");

    const heading = document.querySelector(".heading");
    heading.addEventListener("click", function() {
        alert("You clicked the heading!");
    });
});