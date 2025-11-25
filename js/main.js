<<<<<<< HEAD
// ===========================
// CONFIGURACIÓN DE PROYECTOS
// ===========================

const TOTAL_PHOTOS = 96;
const PROJECTS_TO_SHOW = 12;

// Generar proyectos aleatorios sin descripciones
function getRandomProjects() {
  const usedNumbers = new Set();
  const projects = [];
  
  while (projects.length < PROJECTS_TO_SHOW) {
    const randomNum = Math.floor(Math.random() * TOTAL_PHOTOS) + 1;
    
    if (!usedNumbers.has(randomNum)) {
      usedNumbers.add(randomNum);
      projects.push({
        image: `photo${randomNum}.webp`,
        number: randomNum
      });
    }
  }
  
  return projects;
}

// ===========================
// GENERAR PROYECTOS
// ===========================

function generateProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  const projects = getRandomProjects();
  
  projects.forEach((project, index) => {
    const projectCard = createProjectCard(index + 1, project);
    projectsGrid.appendChild(projectCard);
  });
}

function createProjectCard(index, projectData) {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.setAttribute('data-index', index);
  
  // Número de proyecto
  const number = document.createElement('div');
  number.className = 'project-number';
  number.textContent = String(projectData.number).padStart(3, '0');
  
  // Imagen
  const img = document.createElement('img');
  img.className = 'project-image';
  img.src = `./assets/photos/${projectData.image}`;
  img.alt = `Photo ${projectData.number}`;
  img.loading = 'lazy';
  
  card.appendChild(number);
  card.appendChild(img);
  
  // Animación de entrada
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  
  setTimeout(() => {
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  }, index * 100);
  
  return card;
}

// ===========================
// ANIMACIONES DE SCROLL
// ===========================

function initScrollAnimations() {
  // Animaciones desactivadas
}

// ===========================
// CONTADOR DE TIEMPO REAL
// ===========================

function updateTime() {
  const now = new Date();
  
  // Formato de fecha: DD/MM/YYYY
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  const dateString = `${day}/${month}/${year}`;
  
  // Formato de hora: HH:MM
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const timeString = `${hours}:${minutes}`;
  
  // Actualizar en el DOM
  const dateElement = document.getElementById('currentDate');
  const timeElement = document.getElementById('currentTime');
  
  if (dateElement && dateElement.textContent !== dateString) {
    dateElement.style.transform = 'scale(1.05)';
    dateElement.textContent = dateString;
    setTimeout(() => {
      dateElement.style.transform = 'scale(1)';
    }, 200);
  }
  
  if (timeElement && timeElement.textContent !== timeString) {
    timeElement.style.transform = 'scale(1.05)';
    timeElement.textContent = timeString;
    setTimeout(() => {
      timeElement.style.transform = 'scale(1)';
    }, 200);
  }
}

// ===========================
// ANIMACIÓN DE DOTS
// ===========================

function animateDots() {
  const dots = document.querySelectorAll('.status-dots .dot');
  let currentIndex = 0;
  
  setInterval(() => {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
    currentIndex = (currentIndex + 1) % dots.length;
  }, 1500);
}

// ===========================
// CURSOR PERSONALIZADO
// ===========================

function initCustomCursor() {
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.style.cssText = `
    position: fixed;
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.2s ease;
    mix-blend-mode: difference;
  `;
  document.body.appendChild(cursor);
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 4 + 'px';
    cursor.style.top = e.clientY - 4 + 'px';
  });
  
  document.querySelectorAll('a, button, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(3)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
    });
  });
}

// ===========================
// MICRO ANIMACIONES
// ===========================

function initMicroAnimations() {
  // Animación de la imagen al cargar
  const heroImage = document.querySelector('.hero-image');
  if (heroImage) {
    heroImage.style.opacity = '0';
    setTimeout(() => {
      heroImage.style.transition = 'opacity 1.5s ease';
      heroImage.style.opacity = '1';
    }, 100);
  }

  // Animación del logo al cargar
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.style.opacity = '0';
    logo.style.transform = 'translateY(-20px)';
    setTimeout(() => {
      logo.style.transition = 'opacity 1s ease, transform 1s ease';
      logo.style.opacity = '1';
      logo.style.transform = 'translateY(0)';
    }, 300);
  }

  // Animación de fecha y hora al cargar
  const dateElement = document.getElementById('currentDate');
  const timeElement = document.getElementById('currentTime');
  
  if (dateElement) {
    dateElement.style.opacity = '0';
    dateElement.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      dateElement.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      dateElement.style.opacity = '1';
      dateElement.style.transform = 'translateY(0)';
    }, 600);
  }
  
  if (timeElement) {
    timeElement.style.opacity = '0';
    timeElement.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      timeElement.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      timeElement.style.opacity = '1';
      timeElement.style.transform = 'translateY(0)';
    }, 700);
  }

  // Animación de entrada de los dots
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.style.opacity = '0';
    dot.style.transform = 'scale(0)';
    setTimeout(() => {
      dot.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      dot.style.opacity = '1';
      dot.style.transform = 'scale(1)';
    }, 800 + (index * 150));
  });

  // Animación del tagline
  const tagline = document.querySelector('.tagline');
  if (tagline) {
    tagline.style.opacity = '0';
    tagline.style.transform = 'translateX(-20px)';
    setTimeout(() => {
      tagline.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      tagline.style.opacity = '1';
      tagline.style.transform = 'translateX(0)';
    }, 500);
  }

  // Animación de la metadata con stagger
  const metaBlocks = document.querySelectorAll('.info-block, .tech-stack');
  metaBlocks.forEach((block, index) => {
    block.style.opacity = '0';
    block.style.transform = 'translateY(10px)';
    setTimeout(() => {
      block.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      block.style.opacity = '1';
      block.style.transform = 'translateY(0)';
    }, 1000 + (index * 100));
  });

  // Hover effect en contact links
  const contactLinks = document.querySelectorAll('.email-link, .whatsapp-link');
  contactLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.transform = 'translateX(5px)';
    });
    link.addEventListener('mouseleave', () => {
      link.style.transform = 'translateX(0)';
    });
  });

  // Animación sutil de los iconos
  const techIcons = document.querySelectorAll('.tech-icons svg');
  techIcons.forEach((icon, index) => {
    icon.style.opacity = '0';
    icon.style.transform = 'rotate(-10deg) scale(0.8)';
    setTimeout(() => {
      icon.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      icon.style.opacity = '1';
      icon.style.transform = 'rotate(0deg) scale(1)';
    }, 1200 + (index * 100));

    // Hover rotation
    icon.addEventListener('mouseenter', () => {
      icon.style.transform = 'rotate(10deg) scale(1.1)';
    });
    icon.addEventListener('mouseleave', () => {
      icon.style.transform = 'rotate(0deg) scale(1)';
    });
  });
}

// ===========================
// INICIALIZACIÓN
// ===========================

document.addEventListener('DOMContentLoaded', () => {
  generateProjects();
  initScrollAnimations();
  initCustomCursor();
  initMicroAnimations();
  animateDots();
  
  // Actualizar tiempo cada segundo
  setInterval(updateTime, 1000);
  updateTime();
  
  // Ocultar scroll indicator cuando se hace scroll
  window.addEventListener('scroll', () => {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
      if (window.scrollY > 100) {
        scrollIndicator.style.opacity = '0';
      } else {
        scrollIndicator.style.opacity = '1';
      }
    }
  });
});

// ===========================
// SMOOTH SCROLL
// ===========================

// Smooth scroll para links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
=======
 // Contenedor de galería
    const gallery = document.getElementById('portfolio');

    // Cantidad de imágenes que tenés en la carpeta
    const totalImages = 96;

    // Generar array con nombres secuenciales .webp
    let images = [];
    for (let i = 1; i <= totalImages; i++) {
      images.push(`photos/photo${i}.webp`);
    }

    // Mezclar aleatoriamente
    images = images.sort(() => Math.random() - 0.5);

    // Renderizar en el DOM
    images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = "Fotografía de CUFA";
      img.loading = 'lazy';
      gallery.appendChild(img);
    });
>>>>>>> 756f2d96978fbd92415f22d6ffa35d324259bacc
