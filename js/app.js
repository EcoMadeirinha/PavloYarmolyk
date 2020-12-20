//Get the button:
var btn_to_the_top = document.getElementById("button_to_the_top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (!btn_to_the_top) { //check if button exists
        return;
    }

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn_to_the_top.style.display = "block";
    } else {
        btn_to_the_top.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}