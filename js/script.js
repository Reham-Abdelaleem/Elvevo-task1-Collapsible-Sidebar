const sidebar  = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');
const overlay   = document.getElementById('overlay');
const navLinks  = document.querySelectorAll('.nav-links a');
const isMobile = () => window.innerWidth <= 768;
function toggleSidebar() {
    if (isMobile()) {
        const isOpen = sidebar.classList.contains('mobile-open');
        sidebar.classList.toggle('mobile-open', !isOpen);
        overlay.classList.toggle('active', !isOpen);
    } else {
        sidebar.classList.toggle('collapsed');
    }
}
toggleBtn.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', () => {
    sidebar.classList.remove('mobile-open');
    overlay.classList.remove('active');
});
// Active link
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        if (isMobile()) {
            sidebar.classList.remove('mobile-open');
            overlay.classList.remove('active');
        }
    });
});
// Resize handler
window.addEventListener('resize', () => {
    if (!isMobile()) {
        overlay.classList.remove('active');
        sidebar.classList.remove('mobile-open');
    }
});
// Escape key
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        sidebar.classList.remove('mobile-open');
        overlay.classList.remove('active');
    }
});