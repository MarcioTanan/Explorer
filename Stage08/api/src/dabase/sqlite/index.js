const sqlite3 = require("sqlite3")
const sqlite = require("sqlite")

async function sqliteConnection(){
  const databse = await sqlite.open({
    filename: path.resolve(__dirname, "..", "database")
  })
}