  const { rename } = require('fs/promises')
  
  async function renameFile(from, to) { //--- Renombra el archivo ---
    try {
      await rename(from, to)
      console.log(`Se renombró ${from} a ${to}`)
    } catch (error) {
      console.error(`Got an error trying to rename the file: ${error.message}`)
    }
  }

  module.exports = {
    renameFile
}