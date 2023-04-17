const chalk = require("chalk"); 
const fs = require("fs");

//============[ Saat Bot Token Tidak Ada Maka Akan Merespon ]=========\\
exports.noToken = "Bot token tidak boleh kosong, silahkan buat bot melalui https://t.me/BotFather"

//=============[ Message Saat Pertama Kali Berinteraksi Dengan Bot ]============\\
exports.first_chat = (botname, pushname) => {
return`*Halo Kak ${pushname} 👋*
*Saya adalah Bot Telegram multi fungsi! Klik /menu untuk mengetahui lebih lanjut tentang cara menggunakan bot.*

*Berikut List Menu Yang Tersedia Di ${botname}*

*Jika Menemukan Bug Harap Dimaklumi Dan Laporkan Kepada*
*Owner Atau Creator Agar Segera Di Fix 😎*
Bot Ini Menggunakan Rest Api [dari](https://api.lannn.me) untuk fitur yang tersedia.

Kirim perintah /privacy untuk melihat syarat dan ketentuan penggunaan bot.

*Terima Kasih 🙏*
`
}

//===================[ Rules ]=================\\
exports.snk = `*R U L E S 🚀*
	
1. Jangan Pernah Spam Bot ❎
2. Jangan Mengeksploitasi Bot ❎

Sanksi : *Warn/Soft Block 🚧*

*About Questions ⁉️*

👦 : Bot nya Slow Respon 😒
🤖 : Mohon Bersabar, Mungkin Kendala Dari Jaringan, Signal

👦 : Scriptnya Beli Dimana? 😁
🤖 : Script Ini Tidak Di Perjualbelikan Karena Script Ini Dibagikan Secara Free. Kalian Bisa Mendapatkannya Di Github ERLANRAHMAT

👦 : Apakah Bot Ini Masih Menyimpan File Yang Saya Kirim?
🤖 : Data WhatsApp Anda Hanya Tersimpan Saat Bot Aktif, Dan Bot Tidak Pernah Menyimpan File-file Yang Anda Kirim

👦 : Min, Ada Fitur Yang Error 😔
🤖 : Jika Menemukan Bug/Error Silahkan Langsung Hubungi Owner/Creator Agar Segera Di Fix 

Tetap Patuhi Rules Agar Tetap Bisa Menikmati Bot 😁

*⚠️ Note :* Segala Ketentuan Dan Kebijakan Yang Berlaku Di Pegang Oleh Owner Bot, Sewaktu-Waktu Owner Berhak Memakai Ataupun Mengubah Kebijakan Dan Ketentuan Yang Berlaku

*Thanks To 🙏* Buat Kalian User-User Yang Sudah Memakai Script Ini Dan Pengguna Bot Yang Sudah Mau Mematuhi Rules, Serta Para Constributor Yang Sudah Membantu Dalam Pembuatan Bot Ini 🙏😁
`

exports.getStyle = (style, style2) => {
return `**${style2} Yg Kamu Masukkan Salah**\n\n__Berikut List ${style2} Yg Benar, Total__ **${style}** __${style2}__\n\n`
}

//===============[ Mess ]========\\
exports.wait = "`⏳ Mohon tunggu sebentar`"
exports.ok = `Done ✅`
exports.owner = `Fitur Khusus Owner!! 😏`
exports.eror = `Eror Ka 😌`

//===============[ Menu ]========\\
exports.menu = async (lann, thumbnail, pushname, OWNER_NAME, OWNER, prefix, hitall, latensii, os, simple, week, date, dateIslamic, username, isCreator, user_id) => {
var ini_anu = `Hi ${pushname}

╭─❒ 「 Bot Info 」 
├ Creator :  [@${OWNER_NAME}](${OWNER[0]})
├ Sponsored :  [@BotFather](https://t.me/BotFather)
├ Prefix :   /
├ Total hit : ${hitall}
├ Speed : ${latensii.toFixed(4)} Second
├ Memory Used : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
├ Hostname : ${os.hostname()}
├ Platform : ${os.platform()}
╰❒ Runtime : ${simple.runtime(process.uptime())}

╭─❒ 「 Date Info 」 
├ Masehi : ${week}, ${date}
├ Hijriah : ${dateIslamic}
╰❒

╭─❒ 「 User Info 」 
├ Name : ${pushname}
├ Profile : [@${pushname}](https://t.me/${username})
╰❒ Owner : ${isCreator ? 'True' : `False`}
`
var button = [
[{
text: '🃏 Anime',
callback_data: 'animecmd ' + user_id
},
],
[
],
[{
text: '📥 Download',
callback_data: 'downloadcmd ' + user_id
},
{
text: 'Ephoto 360 🖼️',
callback_data: 'ephotocmd ' + user_id
},
],
[
{
text: 'Islamic 🕌',
callback_data: 'islamcmd ' + user_id
},
],
[
{
text: 'Photooxy 🖼️',
callback_data: 'photooxycmd ' + user_id
},
],
[{
text: '🔖 Owner Menu',
callback_data: 'ownercmd ' + user_id
},
{
text: 'Text Pro 🖌️',
callback_data: 'textprocmd ' + user_id
},
],
[
{
text: '👦 Owner',
callback_data: 'owner ' + user_id
},
]
]
try {
await lann.editMessageMedia({
type: "photo",
media: {
source: thumbnail
},
caption: ini_anu,
parse_mode: "MARKDOWN",
disable_web_page_preview: true
}, {
reply_markup: {
inline_keyboard: button
}
})
} catch {
await lann.replyWithPhoto({
source: thumbnail
}, {
caption: ini_anu,
parse_mode: "MARKDOWN",
disable_web_page_preview: true,
reply_markup: {
inline_keyboard: button
}
})
}
}

//==============[ Anime Menu ]====================\\
exports.animecmd = async (lann, thumbnail, user_id) => {
var button = [
[{
text: '⬅️ Back',
callback_data: 'menucmd ' + user_id
},
{
text: 'Download 📩',
callback_data: 'downloadcmd ' + user_id
}
],
[{
text: '⚘ Owner ⚘',
callback_data: 'owner ' + user_id
}, ]
]
var caption = `╭─❒ 「 ANIME 」 
│ » /ana
│ » /asuna
│ » /ayuzawa
│ » /chitoge
│ » /emilia
│ » /erza
│ » /hinata
│ » /inori
│ » /kaga
│ » /mikasa
│ » /naruto
│ » /sakura
│ » /sagiri
│ » /umaru
│ » /loli
╰──────────◇
`
await lann.editMessageMedia({
type: "photo",
media: {
source: thumbnail
},
caption: caption
}, {
parse_mode: "MARKDOWN",
disable_web_page_preview: true,
reply_markup: {
inline_keyboard: button
}
})
}

//===============[ Downloader ]===========\\
exports.downloadcmd = async (lann, thumbnail, user_id) => {
var button = [
[
{
text: '⬅️ Back',
callback_data: 'animecmd ' + user_id
},
{
text: 'Ephoto 360 🖼️',
callback_data: 'ephotocmd ' + user_id
}
],
[{
text: '⚘ Owner ⚘',
callback_data: 'owner ' + user_id
}, ]
]
var caption = `╭─❒ 「 DOWNLOAD 」 
│ » /ytmp4
│ » /ytmp3
│ » /ytsearch
│ » /igdl
│ » /igphoto
│ » /igvideo
│ » /igreels
│ » /mediafire
│ » /tiktok
│ » /tiktokaudio
╰──────────◇
`
await lann.editMessageMedia({
type: "photo",
media: {
source: thumbnail
},
caption: caption
}, {
parse_mode: "MARKDOWN",
disable_web_page_preview: true,
reply_markup: {
inline_keyboard: button
}
})
}

//==============[ Ephoto360]===========\\
exports.ephotocmd = async (lann, thumbnail, user_id) => {
var button = [
[{
text: '⬅️ Back',
callback_data: 'downloadcmd ' + user_id
},
],
[{
text: '⚘ Owner ⚘',
callback_data: 'owner ' + user_id
}, ]
]
var caption = `╭──❍「 *Ephoto Menu* 」
│ » /ytsilver
│ » /igsilver
│ » /fbsilver
│ » /twtsilver
│ » /ytgold
│ » /iggold
│ » /fbgold
│ » /twtgold
│ » /televisi
│ » /glasses
│ » /blackpink
│ » /blackpink2
│ » /coverpubg
│ » /greenbrush
│ » /eraser
│ » /dragonfire
│ » /incandescent 
│ » /typography
│ » /typography2
│ » /cloth
│ » /grafitti
│ » /galaxy
│ » /blueneon
│ » /nightstars
│ » /cloud
│ » /papercut
│ » /horor
│ » /sunlight
│ » /pig 
╰────❍`  
await lann.editMessageMedia({
type: "photo",
media: {
source: thumbnail
},
caption: caption
}, {
parse_mode: "MARKDOWN",
disable_web_page_preview: true,
reply_markup: {
inline_keyboard: button
}
})
}

//=======================[ Islamic ]=================\\
exports.islamcmd = async (lann, thumbnail, user_id) => {
var button = [
[
{
text: 'Photooxy 🖼️',
callback_data: 'photooxycmd ' + user_id
}
],
[{
text: '⚘ Owner ⚘',
callback_data: 'owner ' + user_id
}, ]
]
var caption = `╭─❒ 「 ISLAMIC 」 
│ » /asmaulhusna
│ » /kisahnabi
╰──────────◇
`
await lann.editMessageMedia({
type: "photo",
media: {
source: thumbnail
},
caption: caption
}, {
parse_mode: "MARKDOWN",
disable_web_page_preview: true,
reply_markup: {
inline_keyboard: button
}
})
}

//================[ Photooxy ]=============\\
exports.photooxycmd = async (lann, thumbnail, user_id) => {
var button = [
[{
text: '⬅️ Back',
callback_data: 'islamcmd ' + user_id
},
{
text: 'Text Pro 🖌️',
callback_data: 'textprocmd ' + user_id
}
],
[{
text: '⚘ Owner ⚘',
callback_data: 'owner ' + user_id
}, ]
]
var caption = `╭─❒ 「 PHOTOOXY 」 
│ » /bevel-text
│ » /luxury
│ » /flaming
│ » /underwater
│ » /shadow-sky
│ » /wolf-metal
│ » /metallic
│ » /metallic2
│ » /burn-paper
│ » /naruto
│ » /3d-summer
│ » /under-grass
│ » /smoke
│ » /flower-typography
│ » /picture-of-love
│ » /hello-kitty
│ » /coffe-cup
│ » /butterfly
│ » /night-sky
│ » /carved-wood
│ » /sweet-candy
╰──────────◇
`
await lann.editMessageMedia({
type: "photo",
media: {
source: thumbnail
},
caption: caption
}, {
parse_mode: "MARKDOWN",
disable_web_page_preview: true,
reply_markup: {
inline_keyboard: button
}
})
}

//=================[ TextPro ]=============\\
exports.textprocmd = async (lann, thumbnail, user_id) => {
var button = [
[{
text: '⬅️ Back',
callback_data: 'photooxycmd ' + user_id
},
{
text: 'Next ➡️',
callback_data: 'textprocmd2 ' + user_id
}
],
[{
text: '⚘ Owner ⚘',
callback_data: 'owner ' + user_id
}, ]
]
var caption = `╭─❒ 「  TEXT PRO 」 
│ » /art-papper
│ » /black-pink
│ » /black-pink2
│ » /broken-glass
│ » /christmas
│ » /deluxe-silver
│ » /drop-water
│ » /engraved
│ » /fabric
│ » /glue-text
│ » /glossy
│ » /grafity-text
│ » /holograpic
│ » /honey
│ » /horor-blood
│ » /ice
│ » /larva
│ » /magma
│ » /multi-color
│ » /neon-devil
│ » /neon-galaxy
│ » /neon-green
│ » /neon-light
│ » /neon-online
│ » /girrafe
│ » /robot
│ » /rusty
│ » /sky-text
│ » /stroberi
│ » /toxic-bokeh
│ » /wicker
│ » /writing
│ » /3d-gradient
╰──────────◇
`
await lann.editMessageMedia({
type: "photo",
media: {
source: thumbnail
},
caption: caption
}, {
parse_mode: "MARKDOWN",
disable_web_page_preview: true,
reply_markup: {
inline_keyboard: button
}
})
}

//================[ Owner ]==============\\
exports.ownercmd = async (lann, thumbnail, user_id) => {
var button = [
[{
text: '⬅️ Back',
callback_data: 'textprocmd ' + user_id
},
{
text: 'Next ➡️',
callback_data: 'textprocmd2 ' + user_id
}
],
[{
text: '⚘ Owner ⚘',
callback_data: 'owner ' + user_id
}, ]
]
var caption = `╭─❒ 「  OWNER 」 
│ » /getcase
│ » /speedtest
╰──────────◇
`
await lann.editMessageMedia({
type: "photo",
media: {
source: thumbnail
},
caption: caption
}, {
parse_mode: "MARKDOWN",
disable_web_page_preview: true,
reply_markup: {
inline_keyboard: button
}
})
}

//===> INI GAUSAH DIUBAH
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
