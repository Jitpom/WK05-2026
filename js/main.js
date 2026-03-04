document.addEventListener("DOMContentLoaded", function() {
    console.log("HTML document has been loaded. Yeah!");

    const heading = document.querySelector(".heading");
    const box2 = document.querySelector(".box2");

    heading.addEventListener("click", function() {
        // Toggle the "active" class to the heading element when clicked
        heading.classList.toggle("active"); 
        box2.classList.toggle("active"); // Also toggle the "active" class for box2
    });

    const box1 = document.querySelector(".box1");
    const box3 = document.querySelector(".box3");

    box1.addEventListener("click", function() {
        box3.classList.toggle("active"); // Toggle the "active" class for box3 when box1 is clicked
    });

});