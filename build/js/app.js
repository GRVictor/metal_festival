document.addEventListener('DOMContentLoaded', function() {
  fixedNav();
  createGallery();
  highlightLink();
  scrollNav();
});

function fixedNav() {
  const header = document.querySelector('.header');
  const logo = document.querySelector('.logo');
  const aboutFestival = document.querySelector('.about-festival');

  window.addEventListener('scroll', function() {
    if (aboutFestival.getBoundingClientRect().bottom <= 1) {
      header.classList.add('fixed');
      logo.classList.add('hidden');
    } else {
      header.classList.remove('fixed');
      logo.classList.remove('hidden');
    }
  });
}

function createGallery() {
  const QUANTITY_IMAGES = 21;
  const gallery = document.querySelector('.gallery-images');

  for (let i = 1; i <= QUANTITY_IMAGES; i++) {
    const image = document.createElement('IMG');
    image.src = `src/img/gallery/full/${i}.jpg`;
    image.alt = `Image band ${i}`;

    // EventHandler
    image.onclick = function() {
      showImage(i);
    };

    gallery.appendChild(image);
  }
}

function showImage(i) {
  const image = document.createElement('IMG');
  image.src = `src/img/gallery/full/${i}.jpg`;
  image.alt = `Image band ${i}`;

  // Create Modal
  const modal = document.createElement('DIV');
  modal.classList.add('modal');
  modal.onclick = closeModal;
  modal.appendChild(image);

  // Esc Key close modal
  document.onkeydown = function(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  // Add HTML
  const body = document.querySelector('body');
  body.classList.add('no-scroll');
  body.appendChild(modal);
}

function closeModal() {
  const modal = document.querySelector('.modal');
  modal.classList.add('fade-out');

  setTimeout(() => {
    modal?.remove();
    const body = document.querySelector('body');
    body.classList.remove('no-scroll');
  }, 500);
}

function highlightLink() {
  document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.primary-nav a'); // Asegúrate de que el selector sea correcto

    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
        currentSection = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('highlight');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('highlight');
      }
    });
  });
}

function scrollNav() {
  const navLinks = document.querySelectorAll('.primary-nav a');

  navLinks.forEach(link => {
    const navLinks = document.querySelectorAll('.primary-nav a');

    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const sectionScroll = e.target.getAttribute('href');
        const section = document.querySelector(sectionScroll);

        section.scrollIntoView({
          behavior: 'smooth'
        });

      })
    });

  });

}