// It's better to wait for the event for manipulation
window.addEventListener("DOMContentLoaded", () => {
  let nav = document.querySelector("nav");
  console.log(nav);
  nav.innerHTML = `
    <h2>This is the text changed from code</h2>
`;
});
