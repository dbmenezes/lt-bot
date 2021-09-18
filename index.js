const venom = require('venom-bot');
const config = require('config')



const menuRespostas = {
	'1':`
	
	Festa 1, dia xx/xx, endereço: xxxxx
	Festa 2, dia xx/xx, endereço: xxxxx,
	Festa 3, dia xx/xx, endereço: xxxxx
	Festa 4, dia xx/xx, endereço: xxxxx
	` 
	,
	'2': 'Ok seu telefone será removido da nossa base de dados',
} 




const listaContatos = [
    {name: 'Antonio' , phoneNumber: '5521984080735@c.us' }
]



const transmitirMensages = (client) => {
	listaContatos.forEach(contato => {
        client.sendText(contato.phoneNumber ,`👋 Oi ${contato.name}!`).then()
		client.sendText(contato.phoneNumber ,`Hoje a Auge convida você a fazer parte do nosso próximo evento 😉`).then()
		client.sendText(contato.phoneNumber ,`Durante *as próximas 72 horas* você tem acesso exclusivo a nossa *pré venda* ou até os ingressos esgotarem!`).then()
		client.sendText(contato.phoneNumber ,`
		🌋AUGE

		📅 XX/XX
		⏰ Xh
		
		Open Bar 
		
		🎧
		.....
		
		https://www.ticketplanet.com.br/codigosecreto
		Código acesso : OAUGE
		Código desconto : PREAUGE`).then()
		client.sendText(contato.phoneNumber ,`
		Gostou dessa notícia e também quer saber a nossa opinião da festa? Digite 1. 
		Caso não queira mais receber informações digite 2.`).then()

    })

	client.sendText(contato.phoneNumber ,`Durante as próximas 72h você tem acesso exclusivo a nossa pré venda ou até os ingressos esgotarem!`).then()
}



venom.create().then(function start(client) {

	transmitirMensages(client);






	client.onMessage( message => {
		console.log(message.type) //chat | video | image | ptt
		console.log(message.body)
		console.log(message.from)
		console.log(message.to)
		console.log(message.chat.contact.pushname)
		console.log(message.isGroupMsg)

		 if (message.body === '1') 
		{
			client.reply(message.from, menuRespostas[1], message.id.toString()).then()
		}
		else if (message.body === '2') 
		{
			client.reply(message.from, menuRespostas[2], message.id.toString()).then()
		}
	})
})







