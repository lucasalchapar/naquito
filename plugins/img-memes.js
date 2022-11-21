/*
     ig : https://www.instagram.com/trapy_tomojado/
*/
import hispamemes from 'shitpost español'

let handler = async (m, { conn, usedPrefix, command }) => {
	
	const meme = hispamemes.meme()
    conn.sendFile(m.chat, meme, '', '', m)
    m.react('😆') 
}
handler.help = ['meme']
handler.tags = ['img']
handler.command = ['meme', 'memes'] 
handler.diamond = true

export default handler
