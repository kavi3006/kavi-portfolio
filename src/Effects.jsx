import { useEffect } from 'react';

function Effects() {
  useEffect(() => {
    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNav = document.getElementById('mobile-nav');
    const overlay = document.getElementById('overlay');

    const toggleMenu = () => {
      mobileNav.classList.toggle('active');
      overlay.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
      mobileMenu.classList.toggle('activxe');
    };

    const closeMenu = () => {
      mobileNav.classList.remove('active');
      overlay.classList.remove('active');
      document.body.classList.remove('no-scroll');
      mobileMenu.classList.remove('active');
    };

    if (mobileMenu && mobileNav && overlay) {
      mobileMenu.addEventListener('click', toggleMenu);
      overlay.addEventListener('click', closeMenu);

      const mobileNavLinks = mobileNav.querySelectorAll('a');
      mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
      });
    }

    // Typing Effect
    const typingElement = document.getElementById('typing-text');
    const texts = ['Web Developer', 'Software Engineer', 'Tech Enthusiast'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let typingTimeout;

    const type = () => {
      const currentText = texts[textIndex];

      if (typingElement) {
        if (isDeleting) {
          typingElement.textContent = currentText.substring(0, charIndex - 1);
          charIndex--;
          typingSpeed = 50;
        } else {
          typingElement.textContent = currentText.substring(0, charIndex + 1);
          charIndex++;
          typingSpeed = 150;
        }

        if (!isDeleting && charIndex === currentText.length) {
          isDeleting = true;
          typingSpeed = 1000;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
          typingSpeed = 500;
        }

        typingTimeout = setTimeout(type, typingSpeed);
      }
    };

    type();

    // Smooth Scrolling
    const handleAnchorClick = e => {
      const targetId = e.currentTarget.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth',
        });
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });

    // Form Submission
    const contactForm = document.getElementById('contact-form');
    const handleFormSubmit = async e => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
        });
        const result = await res.json();
        if (result.success) {
          alert("Thanks for your message! I'll get back to you soon.");
          contactForm.reset();
        } else {
          alert("Oops! Something went wrong. Please try again.");
        }
      } catch (err) {
        console.error(err);
        alert("Network error. Please try again.");
      }
    };

    if (contactForm) {
      contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Active section highlight on scroll
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 200;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const id = section.getAttribute('id');
          document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      mobileMenu?.removeEventListener('click', toggleMenu);
      overlay?.removeEventListener('click', closeMenu);
      mobileNav?.querySelectorAll('a').forEach(link => link.removeEventListener('click', closeMenu));
      anchorLinks.forEach(link => link.removeEventListener('click', handleAnchorClick));
      window.removeEventListener('scroll', handleScroll);
      if (contactForm) contactForm.removeEventListener('submit', handleFormSubmit);
      clearTimeout(typingTimeout);
    };
  }, []);

  return null;
}

export default Effects;
