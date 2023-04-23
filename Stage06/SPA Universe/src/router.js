import { nav } from 'Stage06/SPA Universe/src/elements.js'

export default class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, '', event.target.href)

    this.handle()
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]
    const body = document.body

    switch (pathname) {
      case '/':
        body.classList.add('bgHome')
        body.classList.remove('bgUniverse')
        body.classList.remove('bgExplorer')
        document.title = 'SPA Universe'

        break

      case '/universe':
        body.classList.add('bgUniverse')
        body.classList.remove('bgHome')
        body.classList.remove('bgExplorer')
        document.title = 'O Universo'
        break

      case '/explorer':
        body.classList.add('bgExplorer')
        body.classList.remove('bgUniverse')
        body.classList.add('bgHome')
        document.title = 'Explore o Universo'
        break

      default:
        body.classList.add('pageError')
        body.classList.remove('bgHome')
        body.classList.remove('bgUniverse')
        body.classList.remove('bgExplorer')
        nav.classList.add('hide')
        document.title = 'Ground control to Major Tom!'
        break
    }

    fetch(route)
      .then(data => data.text())
      .then(html => (document.querySelector('#app').innerHTML = html))
  }
}