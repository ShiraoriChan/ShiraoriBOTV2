let handler = async m => m.reply(`
╭─「 Donasi 」
│ • Telkomsel [081351047727]
│ • Dana [081351047727]
│ • Saweria [https://saweria.co/manilman]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
