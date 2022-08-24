require('./config')
const { 
BufferJSON,
WA_DEFAULT_EPHEMERAL, 
generateWAMessageFromContent, 
proto, 
generateWAMessageContent, 
generateWAMessage, 
prepareWAMessageMedia, 
areJidsSameUser, 
getContentType 
} = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { 
exec, 
spawn, 
execSync 
} = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { 
smsg, 
formatp, 
tanggal, 
formatDate, 
getTime, 
isUrl, 
sleep, 
clockString, 
runtime, 
fetchJson, 
getBuffer, 
jsonformat, 
format, 
parseMention, 
getRandom 
} = require('./lib/myfunc')
const { yta, ytv } = require('./lib/y2mate')

// ler banco de dados
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    ...(global.db || {})
}
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []

module.exports = ArlecchinO = async (ArlecchinO, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await ArlecchinO.decodeJid(ArlecchinO.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	
        // Grupo
        const groupMetadata = m.isGroup ? await ArlecchinO.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

	
        // Público e Self
        if (!ArlecchinO.public) {
            if (!m.key.fromMe) return
        }

        
	
	// escrever banco de dados a cada 1 minuto
	setInterval(() => {
            fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
            console.log('Atualizando banco de dados...')
        }, 60 * 1000)

        // Respon Cmd com mídia
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: ArlecchinO.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, ArlecchinO.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        ArlecchinO.ev.emit('messages.upsert', msg)
        }
        
        switch(command) {
        
case 'teste': {
m.reply(`
✅ Criado com sucesso ✅

USUARIO: teste326
SENHA: 1234
                
⏳ Expira em: 24 horas`)
}
break
            case 'entrar': {
                if (!isCreator) throw mess.dono
                if (!text) throw 'Entrei no Grupo'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link inválido!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await ArlecchinO.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'sair': {
        if (!isCreator) throw mess.dono
        await ArlecchinO.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ArlecchinO.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ArlecchinO.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promover': {
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ArlecchinO.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'rebaixa': {
		if (!m.isGroup) throw mess.group
        if (!isBotAdmins) throw mess.botAdmin
        if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ArlecchinO.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'bloquear': {
		if (!isCreator) throw mess.dono
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ArlecchinO.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'desbloquear': {
		if (!isCreator) throw mess.dono
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ArlecchinO.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'mudanome': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Texto ?'
                await ArlecchinO.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.concluido)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'mudadescri': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Texto ?'
                await ArlecchinO.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.concluido)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'fotobot': {
                if (!isCreator) throw mess.dono
                if (!quoted) throw `Enviar/Responder imagem com legenda ${prefix + command}`
                if (!/image/.test(mime)) throw `Enviar/Responder imagem com legenda ${prefix + command}`
                if (/webp/.test(mime)) throw `Enviar/Responder imagem com legenda ${prefix + command}`
                let media = await ArlecchinO.downloadAndSaveMediaMessage(quoted)
                await ArlecchinO.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.concluido)
                }
                break
                case 'mudafoto': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Enviar/Responder imagem com legenda ${prefix + command}`
                if (!/image/.test(mime)) throw `Enviar/Responder imagem com legenda ${prefix + command}`
                if (/webp/.test(mime)) throw `Enviar/Responder imagem com legenda ${prefix + command}`
                let media = await ArlecchinO.downloadAndSaveMediaMessage(quoted)
                await ArlecchinO.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.concluido)
                }
                break
            case 'marca': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Marcando Geral* 〙✪══
 
 ➲ *Mensagem : ${q ? q : 'vazio'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                ArlecchinO.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            ArlecchinO.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
               case 'grupo': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await ArlecchinO.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Grupo de encerramento com sucesso`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await ArlecchinO.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Abrindo um grupo com sucesso`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'grupo open', buttonText: { displayText: 'Abrir Grupo' }, type: 1 },
                        { buttonId: 'grupo close', buttonText: { displayText: 'Fechar Grupo' }, type: 1 }
                    ]
                    await ArlecchinO.sendButtonText(m.chat, buttons, `Comando Para Grupos`, ArlecchinO.user.name, m)

             }
            }
            break
            case 'editarinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await ArlecchinO.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Informações do grupo foram alteradas com sucesso Para Membros`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await ArlecchinO.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Informações do grupo foram alteradas com sucesso Para admin`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editarinfo open', buttonText: { displayText: 'Abrir' }, type: 1 },
                        { buttonId: 'editarinfo close', buttonText: { displayText: 'Fechar' }, type: 1 }
                    ]
                    await ArlecchinO.sendButtonText(m.chat, buttons, `Editar informações do grupo`, ArlecchinO.user.name, m)

            }
            }
            break
            case 'linkgrupo': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await ArlecchinO.groupInviteCode(m.chat)
                ArlecchinO.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n Aqui esta o link: ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await ArlecchinO.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await ArlecchinO.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'deletar': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'A mensagem não foi enviada por um bot!'
                ArlecchinO.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
             case 'tmgrupo': {
                if (!isCreator) throw mess.dono
                if (!text) throw `Cade o texto??????? Virei mágico agora ?`
                let getGroups = await ArlecchinO.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Enviar transmissão para ${anu.length} Bate-papo em grupo, hora de término ${anu.length * 1.5} segundo`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                        callButton: {
                            displayText: 'numero',
                            phoneNumber: '5581936186122'
                        }
                    }]
                      fatihgans = fs.readFileSync('./lib/ArlecchinO.jpg')
                      let txt = `「 Transmissão do Bot 」\n\n${text}`
                      ArlecchinO.send5ButImg(i, txt, ArlecchinO.user.name, fatihgans, btn)
                    }
                m.reply(`Enviando com sucesso a transmissão para ${anu.length} Grupo`)
            }
            break
            case 'bc': case 'broadcast': case 'tmpv': {
                if (!isCreator) throw mess.dono
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Enviar transmissão para ${anu.length} Bater papo\nAcabou o tempo ${anu.length * 1.5} segundo`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                        quickReplyButton: {
                        displayText: 'Velocidade do Bot',
                                    id: 'ping'
                                }
                            }]
                      fatihgans = fs.readFileSync('./lib/ArlecchinO.jpg')
                      let txt = `「 Transmissão do Bot 」\n\n${text}`
                      ArlecchinO.send5ButImg(yoi, txt, ArlecchinO.user.name, fatihgans, btn)
		}
		m.reply(' A transmissão foi um sucesso')
            }
            break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Responder vídeo/imagem com legenda ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await ArlecchinO.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 200) return m.reply('30 segundos no máximo!')
                let media = await quoted.download()
                let encmedia = await ArlecchinO.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Enviar imagem/vídeo com legenda ${prefix + command}\nDuração do vídeo 30 segundos`
                }
            }
            break
            case 'emojimix': {
	        if (!text) throw `Exemplo : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await ArlecchinO.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Marque uma figurinha'
                if (!/webp/.test(mime)) throw `responder um sticker com legenda *${prefix + command}*`
                m.reply(mess.wait)
                let media = await ArlecchinO.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    ArlecchinO.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'marque uma figurinha animada'
                if (!/webp/.test(mime)) throw `responder sticker animado com legenda *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await ArlecchinO.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await ArlecchinO.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Converter Webp em vídeo' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `responder vídeo que você deseja usar como áudio com a legenda ${prefix + command}`
            if (!quoted) throw `responder vídeo que você deseja usar como áudio com a legenda ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            ArlecchinO.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `responder vídeo que você deseja converter em MP3 com a legenda ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `responder vídeo que você deseja converter em MP3 com a legenda ${prefix + command}`
            if (!quoted) throw `responder vídeo que você deseja converter em MP3 com a legenda ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            ArlecchinO.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convertido por ${ArlecchinO.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'togif': {
                if (!quoted) throw 'Marque um sticker animado'
                if (!/webp/.test(mime)) throw `responder sticker animado com legenda *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await ArlecchinO.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await ArlecchinO.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Converter Webp em vídeo' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await ArlecchinO.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
	    case 'play': case 'ytplay': {
                if (!text) throw `Exemplo : ${prefix + command} faling`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `mp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `mp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
⭔ Título : ${anu.title}
⭔ Duração : ${anu.timestamp}`,
                    footer: ArlecchinO.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                ArlecchinO.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'mp3':{
                let { yta } = require('./lib/y2mate')
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return enviar('arquivo grande '+util.format(media))
                ArlecchinO.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg'}, { quoted: m })
                }
                break
                
                case 'mp4':{
                let { ytv } = require('./lib/y2mate')
                let quality = args[1] ? args[1] : '1080p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return enviar('Arquivo acima do limite '+util.format(media))
                ArlecchinO.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4'}, { quoted: m })
                }
                break
            case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': {
                m.reply(mess.wait)
                ArlecchinO.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/anime/'+command, 'apikey') }, caption: `Baixar de ${text}` }, { quoted: m})
            }
            break
	    case 'couple': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                ArlecchinO.sendMessage(m.chat, { image: { url: random.male }, caption: `Casal Masculino` }, { quoted: m })
                ArlecchinO.sendMessage(m.chat, { image: { url: random.female }, caption: `Casal Feminino` }, { quoted: m })
            }
	    break
	            case 'grave': case 'estoura': case 'lento': case 'grave2': case 'rapido': case 'grosso': case 'fino': case 'reverete': case 'robo': case 'lento2': case 'smooth': case 'lentofino':
                try {
                let set
                if (/grave/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/estoura/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/lento/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/grave2/.test(command)) set = '-af volume=12'
                if (/rapido/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/grosso/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/fino/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverete/.test(command)) set = '-filter_complex "areverete"'
                if (/robo/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/lento2/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/lentofino/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await ArlecchinO.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                ArlecchinO.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Responda ao áudio que deseja alterar com uma a legenda *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'public': {
                if (!isCreator) throw mess.dono
                ArlecchinO.public = true
                m.reply('Mudança para Uso Público')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.dono
                ArlecchinO.public = false
                m.reply('muda para uso próprio')
            }
            break
            case 'dono': case 'creator': {
                ArlecchinO.sendContact(m.chat, global.owner, m)
            }
            break
            case 'menu': case 'help': case '?': {
                anu = `╔═.✵.═══ Arlecchino ═══════╗
│
╠──════ GRUPO ═══.✵.
│
╠─${prefix}linkgrupo
╠─${prefix}mudafoto
╠─${prefix}mudanome
╠─${prefix}mudadescri
╠─${prefix}grupo
╠─${prefix}editarinfo
╠─${prefix}add
╠─${prefix}kick
╠─${prefix}hidetag
╠─${prefix}marca
╠─${prefix}promover
╠─${prefix}rebaixa
│
╠──════ PLAY ═══.✵.
│
╠─${prefix}play
╠─${prefix}mp3 link
╠─${prefix}mp4 1080p link
│
╠──════ CONVE ═══.✵.
│
╠─${prefix}toimage
╠─${prefix}sticker
╠─${prefix}emojimix
╠─${prefix}tovideo
╠─${prefix}togif
╠─${prefix}tomp3
╠─${prefix}toaudio
│
╠──════ INFOR ═══.✵.
│
╠─${prefix}ping
╠─${prefix}dono
╠─${prefix}deletar
│
╠──════ AUDIO ═══.✵.
│
╠─${prefix}grave
╠─${prefix}estoura
╠─${prefix}lento
╠─${prefix}grave2
╠─${prefix}rapido
╠─${prefix}grosso
╠─${prefix}fino
╠─${prefix}reverete
╠─${prefix}robo
╠─${prefix}lento2
╠─${prefix}lentofino
│
╠──════ DONO ═══.✵.
│
╠─${prefix}entrar
╠─${prefix}sair
╠─${prefix}bloquear
╠─${prefix}desbloquear
╠─${prefix}tmgrupo
╠─${prefix}tmpv_
╠─${prefix}fotobot
│
╚═══════ Arlecchino ═══.✵.═╝

Arlecchino-Bot 2022`
                let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/ArlecchinO.jpg') }, { upload: ArlecchinO.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                callButton: {
                                    displayText: 'Numero do Dono',
                                    phoneNumber: '+55 81 93618-6122'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status',
                                    id: 'ping'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                ArlecchinO.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.dono)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.dono)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.dono)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.database
		    if (!(budy.toLowerCase() in msgs)) return
		    ArlecchinO.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update de aquivo ${__filename}`))
	delete require.cache[file]
	require(file)
})
