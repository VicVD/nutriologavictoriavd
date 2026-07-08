/* =========================================================
   NUTRIÓLOGA VICTORIA D. — SCRIPT PRINCIPAL
   1. Menú móvil (hamburguesa)
   2. Animación "revelar" al hacer scroll
   3. Cierre de menú al hacer clic en un link
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* ---------- 1. MENÚ MÓVIL ---------- */
  const botonMenu = document.querySelector(".btn-menu-movil");
  const menuNav = document.querySelector(".menu-nav");

  if (botonMenu && menuNav) {
    botonMenu.addEventListener("click", function () {
      botonMenu.classList.toggle("abierto");
      menuNav.classList.toggle("abierto");
    });

    /* Cierra el menú al hacer clic en cualquier link (mejor UX en móvil) */
    menuNav.querySelectorAll("a").forEach(function (enlace) {
      enlace.addEventListener("click", function () {
        botonMenu.classList.remove("abierto");
        menuNav.classList.remove("abierto");
      });
    });
  }

  /* ---------- 2. REVELAR ELEMENTOS AL HACER SCROLL ---------- */
  const elementosRevelar = document.querySelectorAll(".revelar");

  if ("IntersectionObserver" in window && elementosRevelar.length) {
    const observador = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
            observador.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elementosRevelar.forEach(function (el) {
      observador.observe(el);
    });
  } else {
    /* Si el navegador no soporta IntersectionObserver, mostrar todo */
    elementosRevelar.forEach(function (el) {
      el.classList.add("visible");
    });
  }

});
/*=========================

CONTADORES

==========================*/

const counters = document.querySelectorAll(".contador");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.dataset.target;
            let count = 0;
            const speed = target / 80;
            const update = () => {
                count += speed;
                if (count < target) {
                    counter.innerText = Math.ceil(count) + "+";
                    requestAnimationFrame(update);
                } else {
                    counter.innerText = target + "+";
                }
            };
            update();
            observer.unobserve(counter);
        }
    });
});
counters.forEach(counter => observer.observe(counter));