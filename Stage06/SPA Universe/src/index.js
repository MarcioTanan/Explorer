import Events from 'Stage06/SPA Universe/src/events.js'
import Menu from 'Stage06/SPA Universe/src/menu.js'
import Router from 'Stage06/SPA Universe/src/router.js'

const change = Menu()
const router = new Router()
router.add('/', 'Stage06/SPA Universe/pages/home.html')
router.add('/universe', 'Stage06/SPA Universe/pages/universe.html')
router.add('/explorer', 'Stage06/SPA Universe/pages/explorer.html')
router.add(404, 'Stage06/SPA Universe/pages/404.html')

router.handle()
Events({ change })

window.onpopstate = () => router.handle()
window.route = () => router.route()