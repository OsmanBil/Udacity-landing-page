let isHeaderVisible = false;
let timeoutToHideNavbar;

const header = document.getElementById('page__header');

window.addEventListener('load', handleLoad);
window.addEventListener('scroll', handleScroll);


/**
* @description Build Navigation Bar on page load
*/
buildNavBar();

/**
* @description Creates the navigation bar
*/
function buildNavBar() {
    const navBarList = document.getElementById('navbar__list');
    for (let i = 1; i < 5; i++) {
        const element = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = '#section' + i;
        anchor.textContent = 'Section ' + i;
        anchor.classList.add('menu__link');
        element.appendChild(anchor);
        navBarList.appendChild(element);
    }
}

/**
* @description Function to check if an element is in viewport
*/
const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

/**
* @description Scroll to section on link click
*/
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
    window.addEventListener('scroll', highlightActiveLink); // Run the function on scroll event
});

/**
* @description Set sections as active
*/
function highlightActiveLink() {
    const sections = document.querySelectorAll('section'); // Get all section elements
    for (let section of sections) {
        const navLink = document.querySelector(`a[href="#${section.id}"]`); // Get the corresponding navbar link
        if (isInViewport(section)) {
            navLink.classList.add('active'); // Add 'active' class to the corresponding navbar link
        } else {
            navLink.classList.remove('active'); // Remove 'active' class
        }
    }
}

/**
* @description Show header on page load
*/
function handleLoad() {
    if (window.pageYOffset === 0) {
        showHeader();
    }
}

/**
* @description Handle scroll 
*/
function handleScroll() {
    clearTimeout(timeoutToHideNavbar);

    timeoutToHideNavbar = setTimeout(function () {
        hideHeader();
    }, 3000);

    if (window.pageYOffset < 200) {
        clearTimeout(timeoutToHideNavbar);
        showHeader();
        showScrollToTop();
    } else {
        showHeader();
        showScrollToTop();
    }
}

/**
* @description Show header function
*/
function showHeader() {
    if (!isHeaderVisible) {
        header.classList.remove('fade-out');
        header.classList.remove('display-none');
        header.classList.add('fade-in');
        header.classList.remove('z-index-99');
        isHeaderVisible = true;
    }
}

/**
* @description Hide header function
*/
function hideHeader() {
    if (isHeaderVisible) {
        header.classList.remove('fade-in');
        header.classList.add('fade-out');
        header.classList.add('display-none');
        isHeaderVisible = false;
        header.classList.add('z-index-99');
    }
}

/**
* @description Show scroll to top button if page is not on top
*/
function showScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    scrollToTopBtn.addEventListener('click', scrollToTop);

    if (window.pageYOffset > 0) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
}

/**
* @description Scroll to top function
*/
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}