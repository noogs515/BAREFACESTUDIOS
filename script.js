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
