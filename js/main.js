document.addEventListener("DOMContentLoaded", function() {
    console.log("HTML document has been loaded. Yeah!");

    const heading = document.querySelector(".heading");
    heading.addEventListener("click", function() {
        // Add the "active" class to the heading element when clicked
        heading.classList.toggle("active"); 
    });
});