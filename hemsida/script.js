// Add active class to navigation links

const currentLocation = location.href;
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    if (link.href === currentLocation) {
        link.classList.add("active");
    }
});
