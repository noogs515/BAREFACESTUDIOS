/******************************************************************************************************
**********************************MORE DETAILS FUNCTION***********************************************
******************************************************************************************************/
document.querySelectorAll(".toggle-details").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const details = link.nextElementSibling; // expects the hidden <p> right after the link
    if (!details) return;
    details.classList.toggle("hidden");
    link.textContent = details.classList.contains("hidden") ? "More Details" : "Less Details";
  });
});



/******************************************************************************************************
**********************************FAQ EXPAND/COLLAPSSE***********************************************
******************************************************************************************************/
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !expanded);
  });
});


/******************************************************************************************************
********************************************BOOKING PAGE***********************************************
******************************************************************************************************/
const frame = document.getElementById('calFrame');
const tabs  = document.querySelectorAll('.booking-tabs .tab');

tabs.forEach(btn => {
  btn.setAttribute('type', 'button');         // safety
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    // active state
    tabs.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');

    // swap iframe without letting the page move
    const url = btn.dataset.url;
    if (url && frame.src !== url) {
      const x = window.scrollX, y = window.scrollY;  // remember scroll
      frame.src = url;
      requestAnimationFrame(() => window.scrollTo(x, y)); // restore scroll
    }

    btn.blur(); // drop focus to avoid any focus-induced scrolling
  });
});


/******************************************************************************************************
********************************************HEADER HEIGHT***********************************************
******************************************************************************************************/
(function () {
  function setHeaderOffset() {
    const header = document.querySelector('header');
    if (!header) return;
    const h = Math.ceil(header.getBoundingClientRect().height);
    document.body.style.setProperty('--header-h', h + 'px');
  }
  document.addEventListener('DOMContentLoaded', setHeaderOffset);
  window.addEventListener('load', setHeaderOffset);
  window.addEventListener('resize', setHeaderOffset);
})();