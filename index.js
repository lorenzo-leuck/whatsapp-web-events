const qrcode = require("qrcode-terminal");
const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");
const { Buttons, Message } = require("whatsapp-web.js/src/structures");

const clientPathFolder = {
  clientId: "10" + "-" + "5551982211460",
  dataPath: "./.wwebjs_auth",
};

const client = new Client({
  authStrategy: new LocalAuth(clientPathFolder),
  puppeteer: { headless: true },
});

// const message = new Message();

client.on("ready", () => {
  console.log("season ok");
});

function teste() {
  client.on("qr", (qr) => {
    console.log("link QR");
    console.log(qr);
    qrcode.generate(qr, { small: true });
  });
}

client.initialize();

client.on("ready", async () => {
  const number = await client.getNumberId("5551993810619");

  console.log(number);
  await client.sendMessage(number._serialized, "Teste!");
  await client.sendMessage(number._serialized, "Teste!");
  await client.sendMessage(number._serialized, "Teste!");
  await client.sendMessage(number._serialized, "Teste!");
  await client.sendMessage(number._serialized, "Teste!");
  await client.sendMessage(number._serialized, "Teste!");
  await client.sendMessage(number._serialized, "Teste!");
  await client.sendMessage(number._serialized, "Teste!");
  await client.sendMessage(number._serialized, "Teste!");
  await client.sendMessage(number._serialized, "Teste!");
  await client.sendMessage(number._serialized, "Teste!");
  await client.sendMessage(number._serialized, "Teste!");
  await client.sendMessage(number._serialized, "Teste!");
  await client.sendMessage(number._serialized, "Teste!");
  await client.sendMessage(number._serialized, "Teste!");
});

client.on("message", (msg) => {
  console.log("mensagem de: ", msg.from, "Texto: ", msg.body);
  // if (msg.body === "Test") {
  //   // message.links([{ link: "www.youtube.co m", isSuspicious: false }]);
  // }
  msg.getMentions;
  if (msg.body == "responder") {
    let button = new Buttons(
      "Olá, somos da fidelizou-me e estamos fazendo uma pergunta de fidelização.",
      [{ id: "yes", body: "sim" }],
      "Pergunta de fidelização",
      "att: Fidelizou.me"
    );

    client.sendMessage(msg.from, button);
  }

  if (msg.body === "sim") {
    let message = "https://app.fidelizou.me/a/2989/";

    // message.links([{ link: "www.youtube.com", isSuspicious: false }]);

    client.sendMessage(msg.from, message);
  }
});

teste();
