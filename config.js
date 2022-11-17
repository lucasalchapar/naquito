import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['34605735266', 'TRAPY', true],
  ['0'], 
  ['0'] 
] //Numeros de owner 

global.mods = ['34605735266'] 
global.prems = ['34605735266', '34666391671', '34656767429']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  males: 'https://malesin.xyz', 
  fgmods: 'https://api-fgmods.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.herokuapp.com': 'fg-dylux'
}

// Sticker WM
global.packname = 'Trapy┃ᴮᴼᵀ' 
global.author = '@trapy_tomojado' 
global.igfg = '▢ Sígueme en Instagram\nhttps://www.instagram.com/trapy_tomojado/\n' 
global.dygp = 'https://chat.whatsapp.com/JwYypzLA3Cq86bC8rjO0T8'
global.fgsc = 'https://github.com/' 
global.fgyt = 'https://youtube.com/airammaricon'
global.fgpyp = 'https://paypal.me/naco17'
global.fglog = 'https://ih1.redbubble.net/image.1167522717.1832/pp,504x498-pad,600x600,f8f8f8.jpg' 

global.wait = '*⌛ _Cargando..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
