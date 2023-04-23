
import './router.js'
const routes = {
  "/": "Stage06/SPA/pages/home.html",
  "/about": "Stage06/SPA/pages/about.html",
  "/contact": "Stage06/SPA/pages/contact.html",
  404: "Stage06/SPA/pages/404.html",
}





  handle()
  window.onpopstate = () => handle()
  window.route = () => route()
