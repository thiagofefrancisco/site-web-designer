/* Initialize Swiper */
var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 16,
      loop: true, // loop infinito
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 2000, //tempo entre slides (2 segundos)
        disableOnInteraction: false, // não pára se o usuário interagir
      },
    });

const buttons = document.querySelectorAll(".accordion-button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;

    // Fecha todos os outros
    document.querySelectorAll(".accordion-content").forEach(c => {
      if (c !== content) {
        c.style.maxHeight = null;
      }
    });

    document.querySelectorAll(".accordion-button").forEach(b => {
      if (b !== button) {
        b.classList.remove("active");
      }
    });

    // Alterna o atual
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      button.classList.remove("active");
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      button.classList.add("active");
    }
  });
});