/* Show Menu */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/* Activate and Remove Menu */
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    /* Active link */
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /* Remove Menu Mobile */
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/* Scroll Revela Animation */
const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 2000,
    reset: true
});

/* Scroll Home */
sr.reveal('.home_title', {});
sr.reveal('.button', { delay: 200 });
sr.reveal('.home_img', { delay: 400 });
sr.reveal('.home_social-icon', { interval: 200 });

/* Scroll About */
sr.reveal('.about_img', {});
sr.reveal('.about_subtitle', { delay: 400 });
sr.reveal('.about_text', { delay: 400 });

/* Scroll Skills */
sr.reveal('.skills_subtitle', {});
sr.reveal('.skills_text', {});
sr.reveal('.skills_data', { interval: 200 });
sr.reveal('.skills_img', { delay: 600 });

/* Scroll Work */
sr.reveal('.work_img', { interval: 200 });

/* Scroll Contact */
sr.reveal('.contact_input', { interval: 200 });
