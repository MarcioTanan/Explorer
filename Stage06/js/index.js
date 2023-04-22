

const routes = {
  "/": "Stage06/pages/home.html",
  "/about": "Stage06/pages/about.html",
  "/contact": "Stage06/pages/contact.html",
  404: "Stage06/pages/404.html",
}

function route(event){
  event = event || window.event
  event.preventDefault()

  window.history.pushState({},"", event.target.href)

  handle()
}

function handle(){
  const { pathname } = window.location
  const route = routes[pathname] || routes[404]

  fetch(route)
  .then(data => data.text())
  .then(html => {
    
    document.querySelector('#app').innerHTML = html
  })

}

  handle()
  window.onpopstate = () => handle()
  window.route = () => route()
