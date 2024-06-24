
// Get the buttonvar topBtn = document.getElementById("topBtn");

// Function to check scroll position and toggle button visibility
function toggleTopButton() {
    // Calculate 50% of the viewport height
    var scrollThreshold = window.innerHeight / 2;

    // Check if the scroll position is greater than the threshold
    if (document.documentElement.scrollTop > scrollThreshold) {
        topBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
    }
}

// Attach scroll event listener
window.onscroll = toggleTopButton;

// When the user clicks on the button, scroll to the top of the document
topBtn.onclick = function() {
    document.documentElement.scrollTop = 0;
};
