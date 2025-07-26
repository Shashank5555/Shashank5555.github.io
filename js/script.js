/*
  JavaScript for Sai Shashank Yerra’s portfolio site. Adds a mobile menu
  toggle and smooth scrolling to anchor links. Loads the current year
  into the footer dynamically.
*/

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('mobile-menu');
  const navList = document.getElementById('nav-list');

  // Toggle mobile navigation
  menuToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        e.preventDefault();
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
        if (navList.classList.contains('open')) {
          navList.classList.remove('open');
        }
      }
    });
  });

  // Set current year in footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Initialise particle background if library is available
  if (window.particlesJS) {
    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: ['#7366ff', '#5646e5', '#ffffff'] },
        shape: { type: 'circle' },
        opacity: { value: 0.6, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 120, color: '#7366ff', opacity: 0.4, width: 1 },
        move: { enable: true, speed: 1, direction: 'none', out_mode: 'out' }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'repulse' },
          onclick: { enable: true, mode: 'push' },
          resize: true
        },
        modes: {
          repulse: { distance: 80 },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });
  }

  // Custom cursor behaviour using GSAP
  const cursor = document.querySelector('.cursor');
  const follower = document.querySelector('.cursor-follower');
  if (cursor && follower && window.gsap) {
    // Track mouse position
    document.addEventListener('mousemove', (e) => {
      const x = e.clientX;
      const y = e.clientY;
      // Position the small cursor directly under the pointer
      gsap.to(cursor, { duration: 0, x: x, y: y });
      // Ease the follower slightly behind the pointer
      gsap.to(follower, { duration: 0.3, x: x, y: y, ease: 'power2.out' });
    });
    // Enlarge follower on interactive elements
    const interactiveEls = document.querySelectorAll('a, button, .skill, .project-card, .cert-card');
    interactiveEls.forEach(el => {
      el.addEventListener('mouseenter', () => {
        gsap.to(follower, { duration: 0.2, scale: 1.5 });
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(follower, { duration: 0.2, scale: 1 });
      });
    });
  }

  // Initialise VanillaTilt on project cards for subtle 3D tilt effect
  if (window.VanillaTilt) {
    const projectCards = document.querySelectorAll('.project-card');
    const certCards = document.querySelectorAll('.cert-card');
    VanillaTilt.init(projectCards, {
      max: 6,
      speed: 400,
      glare: true,
      'max-glare': 0.2
    });
    VanillaTilt.init(certCards, {
      max: 6,
      speed: 400,
      glare: true,
      'max-glare': 0.2
    });
  }

  // GSAP animations
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    // Hero animation: fade and slide up each text element sequentially
    if (document.querySelector('.hero-content h1')) {
      gsap.from('.hero-content h1', { duration: 1.2, y: 50, opacity: 0, ease: 'power4.out' });
    }
    if (document.querySelector('.hero-content .subtitle')) {
      gsap.from('.hero-content .subtitle', { duration: 1.2, y: 60, opacity: 0, delay: 0.2, ease: 'power4.out' });
    }
    if (document.querySelector('.hero-content .description')) {
      gsap.from('.hero-content .description', { duration: 1.2, y: 70, opacity: 0, delay: 0.4, ease: 'power4.out' });
    }
    if (document.querySelector('.hero-content .btn')) {
      gsap.from('.hero-content .btn', { duration: 1.2, y: 80, opacity: 0, delay: 0.6, ease: 'power4.out' });
    }

    // About section animation (only if the section exists)
    if (document.querySelector('#about')) {
      gsap.from('#about h2', {
        scrollTrigger: { trigger: '#about', start: 'top 80%' },
        y: 40,
        opacity: 0,
        duration: 1
      });
      gsap.from('#about .about-text p', {
        scrollTrigger: { trigger: '#about', start: 'top 85%' },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2
      });
    }

    // Skills section animation
    if (document.querySelector('#skills')) {
      gsap.from('#skills h2', {
        scrollTrigger: { trigger: '#skills', start: 'top 80%' },
        y: 40,
        opacity: 0,
        duration: 1
      });
      gsap.from('#skills .skill', {
        scrollTrigger: { trigger: '#skills', start: 'top 75%' },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1
      });
    }

    // Projects section animation
    if (document.querySelector('#projects')) {
      gsap.from('#projects h2', {
        scrollTrigger: { trigger: '#projects', start: 'top 80%' },
        y: 40,
        opacity: 0,
        duration: 1
      });
      gsap.from('#projects .project-card', {
        scrollTrigger: { trigger: '#projects', start: 'top 75%' },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      });
    }

    // Contact section animation
    if (document.querySelector('#contact')) {
      gsap.from('#contact h2', {
        scrollTrigger: { trigger: '#contact', start: 'top 80%' },
        y: 40,
        opacity: 0,
        duration: 1
      });
      gsap.from('#contact .contact-info > *', {
        scrollTrigger: { trigger: '#contact', start: 'top 75%' },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1
      });
    }

    // Certifications page animations
    if (document.querySelector('.cert-grid')) {
      gsap.from('.certifications h2', {
        scrollTrigger: { trigger: '.certifications', start: 'top 80%' },
        y: 40,
        opacity: 0,
        duration: 1
      });
      gsap.from('.cert-card', {
        scrollTrigger: { trigger: '.cert-grid', start: 'top 75%' },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      });
    }
  }

  // Typewriter / rotating job title effect
  const jobTitleEl = document.getElementById('job-title');
  if (jobTitleEl) {
    const roles = ['Data Scientist', 'Python Developer', 'ML Engineer', 'Problem Solver'];
    let roleIndex = 0;
    let charIndex = 0;
    let typing = true;
    const typingSpeed = 120;
    const erasingSpeed = 60;
    const pauseBetween = 2000;

    function typeRole() {
      if (!typing) return;
      const role = roles[roleIndex];
      if (charIndex < role.length) {
        jobTitleEl.textContent += role.charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, typingSpeed);
      } else {
        // pause then erase
        setTimeout(eraseRole, pauseBetween);
      }
    }
    function eraseRole() {
      const text = jobTitleEl.textContent;
      if (text.length > 0) {
        jobTitleEl.textContent = text.substring(0, text.length - 1);
        setTimeout(eraseRole, erasingSpeed);
      } else {
        // move to next role
        roleIndex = (roleIndex + 1) % roles.length;
        charIndex = 0;
        setTimeout(typeRole, 500);
      }
    }
    typeRole();
  }
});