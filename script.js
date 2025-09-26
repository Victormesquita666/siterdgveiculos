// Lista das imagens do carrossel
const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slides img').length;
    const slideWidth = 600; // Largura de cada slide (px)
    let currentIndex = 0;

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    // Trocar slide a cada 3 segundos (3000 ms)
    setInterval(nextSlide, 3000);
  // Se quiser ativar passagem automática:
  // setInterval(() => mudarSlide(1), 4000); // muda a cada 4 segundos