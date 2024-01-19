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
    if (sectionId === "Home") {
        // For the "Home" section, scroll to the top of the page
        scrollToTop();
    } else {
        // For other sections, scroll to the top of the specified section
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        }
    }
}

//business card
document.addEventListener('scroll', function () {
    var contactSection = document.getElementById('Contact');
    var businessCard = document.querySelector('.business-card');

    var contactSectionRect = contactSection.getBoundingClientRect();
    var isVisible = contactSectionRect.top < window.innerHeight && contactSectionRect.bottom >= 0;

    if (isVisible) {
        businessCard.classList.add('active');
    } else {
        businessCard.classList.remove('active');
    }
});

//#About section
document.addEventListener('DOMContentLoaded', function () {
    // Function to add the 'active' class to the #About section
    function activateAboutSection() {
        var aboutSection = document.getElementById('About');
        aboutSection.classList.add('active');
    }

    // Use Intersection Observer to trigger the animation when #About is in the viewport
    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                activateAboutSection();
                // Stop observing once activated to avoid unnecessary calls
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); // Adjust the threshold value as needed

    // Target the #About section with the observer
    var aboutSection = document.getElementById('About');

    // Check if the section exists before observing (for safety)
    if (aboutSection) {
        observer.observe(aboutSection);
    }

    // Additionally, you may need to manually trigger the animation on smaller screens
    // based on your design and requirements.

    // Example: Manually trigger the animation on screens less than or equal to 768px width
    if (window.innerWidth <= 768) {
        activateAboutSection();
    }

    if (window.innerHeight <= 768) {
        activateAboutSection();
    }
});

//#Skills section
document.addEventListener('DOMContentLoaded', function () {
    // Function to add the 'active' class to the #Skills section
    function activateSkillsSection() {
        var skillsSection = document.getElementById('Skills');
        skillsSection.classList.add('active');
    }

    // Use Intersection Observer to trigger the animation when #Skills is in the viewport
    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                activateSkillsSection();
                // Stop observing once activated to avoid unnecessary calls
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); // Adjust the threshold value as needed

    // Target the #Skills section with the observer
    var skillsSection = document.getElementById('Skills');

    // Check if the section exists before observing (for safety)
    if (skillsSection) {
        observer.observe(skillsSection);
    }

    // Additionally, you may need to manually trigger the animation on smaller screens
    // based on your design and requirements.

    // Example: Manually trigger the animation on screens less than or equal to 768px width
    if (window.innerWidth <= 768) {
        activateSkillsSection();
    }

    if (window.innerHeight <= 768) {
        activateSkillsSection();
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Trigger scrollToTop function on page load
window.onload = scrollToTop;