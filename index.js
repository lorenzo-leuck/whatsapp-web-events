const qrcode = require("qrcode-terminal");
const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");
const { Buttons, Message } = require("whatsapp-web.js/src/structures");

const clientPathFolder = {
  clientId: "10" + "-" + "5551982211460",
  dataPath: "./.wwebjs_auth",
};

const client = new Client({
  authStrategy: new LocalAuth(clientPathFolder),
  puppeteer: { headless: false },
});

function authenticate() {
  client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
  });
}

client.initialize();

client.on("ready", async () => {
  const number = await client.getNumberId("5551982211460");

  await client.sendMessage(number._serialized, "teste");
});

client.on("message_create", async (msg) => {
  let chat = await msg.getInfo();

  console.log("----------------msg_info------------------");
  console.log(chat);
  console.log("------------------------------------------");
});

// client.on("message_create", async (msg) => {
//   const info = await msg.getInfo();
//   console.log("----------------msg_info------------------");
//   console.log(info);
//   console.log("------------------------------------------");

//   const resolveStatusTimestamp = async (msg) => {
//     let info = await msg.getInfo();
//     switch (message.ack) {
//       case ACK_DEVICE:
//         return info["delivery"][0].t;
//       case ACK_READ:
//         return info["read"][0].t;
//       case ACK_PLAYED:
//         return info["played"][0].t;
//       default:
//         return null;
//     }
//   };
//   console.log(resolveStatusTimestamp);
// });

// client.on("message_ack", (ack) => {
//   console.log(
//     ">>>>>>>>>>>>>>>>>>>>>>>> msg_ack <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<"
//   );
//   console.log(ack);
// });

// authenticate();
