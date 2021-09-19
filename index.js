const venom = require("venom-bot");
const config = require("config");

const menuRespostas = {
  1:  "🌋"
	,
  2: "Ok, o seu telefone esta excluído.",
};

const listaContatos = [{ name: "Antonio", phoneNumber: "5521984080735@c.us" }];



const transmitirMensages = (client) => {
  listaContatos.forEach((contato) => {
    client.
		sendText(contato.phoneNumber, `👋 Oi ${contato.name},`).then();
    client
      .sendText(
        contato.phoneNumber,
        `Parece que é brincadeira, mas essa *mensagem está vindo de dentro do vulcão* 🌋😜. E ao invés de lava, vim trazer uma ótima notícia!`
      )
      .then();
    client
      .sendText(
        contato.phoneNumber,
        `*A AUGE* 🌋, que surpreendeu a todos no 7 de setembro, volta com mais um BOOM na segunda, véspera do feriado de 02 de novembro!  ✈️`
      )
      .then();
    client
      .sendText(
        contato.phoneNumber,
        `E como queremos você lá, criamos um código exclusivo de pré venda. *A pré venda abre HOJE ÀS 17h!*`
      )
      .then();
    client
      .sendText(
        contato.phoneNumber,
        `⚠️ Esse código é válido apenas por 24 horas, valendo até as 20 horas de amanhã!`
      )
      .then();
	client
      .sendText(
        contato.phoneNumber,
        `Gostou dessa notícia e também quer saber a nossa opinião da festa? Digite 1. Caso não queira mais receber informações digite 2.`
      )
      .then();
  });
};

venom.create().then(function start(client) {
  transmitirMensages(client);

  client.onMessage((message) => {
    console.log(message.type); //chat | video | image | ptt
    console.log(message.body);
    console.log(message.from);
    console.log(message.to);
    console.log(message.chat.contact.pushname);
    console.log(message.isGroupMsg);

    if (message.body === "1") {
      client
        .reply(message.from, menuRespostas[1], message.id.toString())
        .then();
    } else if (message.body === "2") {
		client
		.reply(message.from, menuRespostas[2], message.id.toString())
        .then();
    }
  });
});
