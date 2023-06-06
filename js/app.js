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
// Function to check if an element is in viewport
const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};



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
    const navBar = document.getElementById('navBar');
    navBar.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            const targetSectionId = event.target.getAttribute('href');
            const targetSection = document.querySelector(targetSectionId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Run the function on scroll event
    window.addEventListener('scroll', highlightActiveLink);
});

// Set sections as active
function highlightActiveLink() {
    // Get all section elements
    const sections = document.querySelectorAll('section');
    for (let section of sections) {
        // Get the corresponding navbar link
        const navLink = document.querySelector(`a[href="#${section.id}"]`);

        if (isInViewport(section)) {
            // Add 'active' class to the corresponding navbar link
            navLink.classList.add('active');
        } else {
            // Remove 'active' class
            navLink.classList.remove('active');
        }
    }

}


const header = document.getElementById('page__header');
let isHeaderVisible = false;
let timeoutId;

window.addEventListener('load', handleLoad);
window.addEventListener('scroll', handleScroll);

function handleLoad() {
    if (window.pageYOffset === 0) {
        showHeader();
    }
}

function handleScroll() {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(function () {
        hideHeader();
    }, 3000);

    if (window.pageYOffset < 200) {
        clearTimeout(timeoutId);
        showHeader();
        showScrollToTop();
    } else {
        showHeader();
        showScrollToTop();
    }
}

function showHeader() {
    if (!isHeaderVisible) {
        header.classList.remove('fade-out');
        header.classList.remove('display-none');
        header.classList.add('fade-in');
        isHeaderVisible = true;
    }
}

function hideHeader() {
    if (isHeaderVisible) {
        header.classList.remove('fade-in');
        header.classList.add('fade-out');
        setTimeout(function () {
            header.classList.add('display-none');
        }, 3000);
        isHeaderVisible = false;
    }
}


const scrollToTopBtn = document.getElementById('scrollToTopBtn');


scrollToTopBtn.addEventListener('click', scrollToTop);



function showScrollToTop() {
    if (window.pageYOffset > 0) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  }

function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }