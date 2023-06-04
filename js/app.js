/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function buildNavBar() {
    const navBarList = document.getElementById('navbar__list');
    for (let i = 1; i < 5; i++) {
        const element = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = '#section' + i;
        anchor.textContent = 'Navigation ' + i;
        element.appendChild(anchor);
        navBarList.appendChild(element);
    }
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNavBar();

// Scroll to section on link click
document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the navigation menu
    const navBar = document.getElementById('navBar');
    // Attach a click event listener to the navigation menu
    navBar.addEventListener('click', (event) => {
        // Check if the clicked element is an anchor tag
        if (event.target.tagName === 'A') {
            // Prevent the default anchor link behavior
            event.preventDefault();
            // Retrieve the target section's id from the href attribute
            const targetSectionId = event.target.getAttribute('href');
            // Retrieve the target section element
            const targetSection = document.querySelector(targetSectionId);
            // Scroll to the target section using smooth scrolling
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
// Set sections as active

