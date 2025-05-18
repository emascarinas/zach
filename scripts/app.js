document.addEventListener("DOMContentLoaded", function() {
    const pageWrapper = document.getElementById('page-wrapper');

    // Function to fade in
    function fadeIn() {
        pageWrapper.classList.remove('fade-out');
        pageWrapper.classList.add('fade-in');
    }

    // Fade in on page load
    setTimeout(fadeIn, 10); // Slight delay to ensure the initial state is applied

    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent immediate navigation
            const href = this.href; // Store the destination URL

            // Add the fade-out class
            pageWrapper.classList.remove('fade-in');
            pageWrapper.classList.add('fade-out');

            // Wait for the transition to finish, then navigate
            setTimeout(() => {
                window.location.href = href;
            }, 200); // Match the transition duration
        });
    });

    // Hamburger menu logic
    const burger = document.getElementById('hamburger');
    const navMenu = document.getElementById('mainNav');
    if (burger && navMenu) {
        burger.addEventListener('click', function() {
            // Debug print
            console.log('Hamburger clicked!');
            navMenu.classList.toggle('active');
            burger.classList.toggle('open'); // Animate hamburger
            // TODO: Animate hamburger icon to X
        });
        // Close menu when clicking a link (for better UX)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                burger.classList.remove('open');
            });
        });
    }
    // TODO: Close menu when clicking a link (for better UX)
    // document.querySelectorAll('nav a').forEach(link => {
    //     link.addEventListener('click', () => navMenu.classList.remove('active'));
    // });
});