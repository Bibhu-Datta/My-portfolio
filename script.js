// Project Filtering Logic
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-filter');

        projects.forEach(project => {
            if (category === 'all' || project.getAttribute('data-category') === category) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

// Contact Form Submission (Dummy Logic)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page refresh
    alert('Thank you for your message! I will get back to you soon.'); 
});
