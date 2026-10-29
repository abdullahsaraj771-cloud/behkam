function toggleMenu() {
const menu = document.getElementById("menu");
menu.classList.toggle("show");
}
document.querySelectorAll("#menu a").forEach(link => {
link.addEventListener("click", () => {
document.getElementById("menu").classList.remove("show");
});
});
document.getElementById("contactForm").addEventListener("submit",
function(event) {
event.preventDefault();
document.getElementById("formNotice").textContent =
"The contact form is not connected to a server yet.";
});