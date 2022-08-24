const fs = require('fs')
const chalk = require('chalk')
global.owner = ['5581936186122']
global.packname = 'Arlecchino-Bot'
global.author = 'Ghost Js'
global.sessionName = 'arlecchino'
global.prefa = ['','!','.']
global.sp = '⭔'
global.mess = {
    success: 'Foi um Sucesso',
    admin: 'Recursos especiais de administração de grupo!',
    botAdmin: 'Bots devem ser administradores em primeiro lugar!',
    dono: 'Recursos especiais do proprietário do bot',
    grupo: 'Recurso usado apenas para grupos!',
    private: 'Recursos usados ​​apenas para bate-papo privado!',
    bot: 'Recursos especiais do usuário do número do bot',
    wait: 'Aguerde um momento estou analisando seu pedido...',
}
global.thumb = fs.readFileSync('./lib/ArlecchinO.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Atualizado'${__filename}'`))
	delete require.cache[file]
	require(file)
})
