let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Haiiikk Goshujin-sama
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@48699515364/i
handler.command = new RegExp

module.exports = handler
