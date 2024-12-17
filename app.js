import Router from "./services/Router.js";

// It's better to wait for the event for manipulation
window.app = {};
app.router = Router;

window.addEventListener("DOMContentLoaded", () => {
  app.router.init();
});
