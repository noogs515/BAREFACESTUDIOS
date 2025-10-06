const videoText = document.querySelector('#video p');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      videoText.classList.add('fade-in');
      observer.unobserve(videoText);
    }
  });
}, { threshold: 0.3 });

observer.observe(videoText);


document.querySelectorAll(".toggle-details").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const details = this.nextElementSibling; // assumes next <p> is the hidden details
    details.classList.toggle("hidden");
    this.textContent = details.classList.contains("hidden")
      ? "More Details"
      : "Less Details";
  });
});