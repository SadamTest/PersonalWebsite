document.addEventListener("DOMContentLoaded", function () {
    var menuOptions = document.getElementById('menuOptions');
    // Check if the element is hidden
    var isHidden = menuOptions.hasAttribute('hidden');

    // If hidden, remove the attribute, otherwise set the display to none
    if (!isHidden) {
        menuOptions.style.display = 'none';
    } else {
        menuOptions.removeAttribute('hidden');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var scrollDownIcon = document.getElementById('scrollDownIcon');
    scrollDownIcon.addEventListener('click', function () {
        var aboutSection = document.getElementById('About');

        // Ensure the scroll goes to the top of the About section
        var targetOffset = aboutSection.offsetTop;

        // Use smooth scrolling to the About section
        window.scrollTo({ top: targetOffset, behavior: 'smooth' });
    });
});


// Function to toggle the menu
function toggleMenu() {
    var menuOptions = document.getElementById('menuOptions');

    // Toggle the 'show' class to trigger the transition
    menuOptions.classList.toggle('show');

    // Check if the menu is currently shown
    var isMenuVisible = menuOptions.classList.contains('show');

    // Set the display property based on visibility
    menuOptions.style.display = isMenuVisible ? 'block' : 'none';
}

// Function to scroll directly to a section
function scrollToSection(sectionId) {
    var targetSection = document.getElementById(sectionId);
    var headerHeight = document.querySelector('.header').offsetHeight;
    var targetOffset = targetSection.offsetTop - headerHeight;
    window.scrollTo({ top: targetOffset, behavior: 'smooth' });
}
