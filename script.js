// jazik
function toggleLanguage(lang) {
  const enBtn = document.querySelector('button[onclick="toggleLanguage(\'en\')"]');
  const mkBtn = document.querySelector('button[onclick="toggleLanguage(\'mk\')"]');
  const bioText = document.querySelector('.bio-text');

  if (lang === 'en') {
    enBtn.classList.add('active');
    mkBtn.classList.remove('active');
    bioText.textContent = "Passionate software engineer / video game develeoper with background in electronic music composition & sound design. Currently pursuing my degree while working on creative projects that display art, technology, space and creativity. My background in both technical and artistic fields allows me to approach problems with unique perspectives and deliver elegant solutions. I also have experience in chess, video editing and 3D Modeling.";
  } else {
    enBtn.classList.remove('active');
    mkBtn.classList.add('active');
    bioText.textContent = "Страствен софтверски инженер / креатор на видео игри, искуство во компонирање електронска музика и дизајнирање на звук. Моментално студирам, а воедно работам и на креативни проекти кои прикажуваат уметност, технологија, вселена и креативност. Моето искуство и во техничките и во уметничките области ми овозможува да пристапувам кон проблемите од уникатни перспективи и да нудам елегантни решенија. Исто така, имам искуство во шах, видео монтажа и 3Д моделирање.";
  }
}

function scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
    }

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
