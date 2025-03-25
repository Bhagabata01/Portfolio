// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

// Highlight active navbar link while scrolling
window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('nav ul li a');

    sections.forEach((sec, index) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
});

// Button Click Events
document.querySelector('.buttons .btn:nth-child(1)').addEventListener('click', () => {
    window.location.href = 'your-resume-link.pdf';  // Change to actual resume link
});

document.querySelector('.buttons .btn:nth-child(2)').addEventListener('click', () => {
    window.open('https://github.com/your-github-profile', '_blank'); // Change to your GitHub profile
});
