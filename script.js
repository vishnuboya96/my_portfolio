const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav a");

sections.forEach(section => section.style.display = "none");

document.getElementById("logo").addEventListener("click", () => {
  sections.forEach(section => section.style.display = "none");
  document.querySelector(".hero").style.display = "block";
  navLinks.forEach(nav => nav.classList.remove("active"));
});

if (sections.length > 0) {
  sections[0].style.display = "block";
  navLinks[0].classList.add("active");
}
window.addEventListener("DOMContentLoaded", () => {
  sections.forEach(section => section.style.display = "none");
  document.querySelector(".hero").style.display = "block";
});

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").slice(1);
    sections.forEach(section => section.style.display = "none");
    document.getElementById(targetId).style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
    navLinks.forEach(nav => nav.classList.remove("active"));
    link.classList.add("active");
  });
});
