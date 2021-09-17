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
    {name: 'Daniel Bezerra' , phoneNumber: '5511964452220' }
]



const transmitirMensages = () => {
	listaContatos.forEach(contato => {
        client.sendText(contato.phoneNumber ,`Olá ${contato.name} eu sou o consultor da AUGE , quer saber das opções de festa para esse fim de semana? se sim 
        digite 1. Caso queira sair da nossa base de dados digite 2
        `).then()

    })
}



venom.create().then(function start(client) {

	transmitirMensages();






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
		else 
		{
			client.reply(message.from, menuRespostas[2], message.id.toString()).then()
		}
	})
})







