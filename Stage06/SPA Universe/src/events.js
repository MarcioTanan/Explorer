import { home, universe, explorer } from 'Stage06/SPA Universe/src/elements.js'

export default function ({ change }) {
  home.addEventListener('click', () => {
    change.selectHome()
  })

  universe.addEventListener('click', () => {
    change.selectUniverse()
  })

  explorer.addEventListener('click', () => {
    change.selectExplorer()
  })
}