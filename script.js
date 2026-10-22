
/* MENU MOBILE */
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle?.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');

    menuToggle.setAttribute('aria-expanded', String(isOpen));

    menuToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});

/* TUTUP MENU SETELAH LINK DIKLIK */
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');

        menuToggle?.setAttribute('aria-expanded', 'false');

        if (menuToggle) {
            menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
    });
});

/* FILTER PROYEK */
const filters = document.querySelectorAll('.filter');
const projectCards = document.querySelectorAll('.project-card');

filters.forEach(button => {
    button.addEventListener('click', () => {
        filters.forEach(item => {
            item.classList.remove('active');
        });

        button.classList.add('active');

        const selectedFilter = button.dataset.filter;

        projectCards.forEach(card => {
            if (
                selectedFilter === 'all' ||
                card.dataset.category === selectedFilter
            ) {
                card.hidden = false;
            } else {
                card.hidden = true;
            }
        });
    });
});

const qualificationTabs = document.querySelectorAll('.qualification-tab');

qualificationTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        qualificationTabs.forEach((item) => {
            item.classList.remove('active');
        });

        tab.classList.add('active');

        document.querySelectorAll('.qualification-timeline').forEach((timeline) => {
            timeline.hidden = timeline.id !== tab.dataset.tab;
        });
    });
});


/* FORM KONTAK */
const contactForm = document.getElementById('contact-form');

contactForm?.addEventListener('submit', event => {
    event.preventDefault();

    alert(
        'Terima kasih! Form ini masih berupa demo dan belum mengirim pesan ke email.'
    );

    contactForm.reset();
});

/* TAHUN OTOMATIS DI FOOTER */
const yearElement = document.getElementById('year');

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
