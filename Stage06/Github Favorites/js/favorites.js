
export class Favorites{
  constructor(root){
    this.root = document.querySelector(root)
    this.load()
  }

  load(){
     this.entries = [
      {
      login: 'maykbrito',
      name: "Mayk Brito",
      public_repos: "76",
      followers: "120000",
    },

    {
      login: 'diego3g',
      name: "Diego Fernandes",
      public_repos: "48",
      followers: "122503"
    }
  ]
  this.entries = this.entries
  }
}

export class FavoritesView extends Favorites{
  constructor(root){
    super(root)

    this.tbody = this.root.querySelector('table tbody')

    this.update()
  }

  update(){
    this.removeAllTr()

   
    
  this.entries.forEach(user => {
    const row = this.createRow()
   
    row.querySelector(".user img").src = `https://github.com/${user.login}.png`

    this.tbody.append
  })
   }

   createRow(){
    const tr = document.createElement('tr')

    tr.innerHTML = `
    <td class="user">
    <img src="https://github.com/maykbrito.png" alt="Imagem de maikbrito">
    <a href="https://github.com/maykbrito" target="_blank">
      <p>Mayk Brito</p>
      <span>maykbrito</span>
    </a>
  </td>
  <td class="repositories">
    76
  </td>
  <td class="followers">
    9589
  </td>
  <td>
    <button class="remove">&times;</button>
  </td>
    `
    return tr
   }

  removeAllTr(){
        this.tbody.querySelectorAll('tr').forEach((tr) =>{
      tr.remove()
    } )
  }
  
}