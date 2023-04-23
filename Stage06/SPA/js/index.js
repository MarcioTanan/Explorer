import {Router} from './router.js'

const router = new Router()
router.add('/', 'Stage06/SPA/pages/home.html')
router.add('/about','Stage06/SPA/pages/about.html')
router.add('/contact', 'Stage06/SPA/pages/contact.html')
router.add(404, 'Stage06/SPA/pages/404.html')







  router.handle()

  window.onpopstate = () => router.handle()
  window.route = () => router.route()
